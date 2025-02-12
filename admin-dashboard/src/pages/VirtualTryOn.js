import React, { useRef, useEffect, useState } from "react";
import { FaceMesh } from "@mediapipe/face_mesh";
import { Camera } from "@mediapipe/camera_utils";
import "./VirtualTryOn.css";

const VirtualTryOn = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!videoRef.current || !canvasRef.current) return;

        const faceMesh = new FaceMesh({
            locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
        });

        faceMesh.setOptions({
            maxNumFaces: 1,
            refineLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5,
        });

        faceMesh.onResults((results) => {
            const canvasCtx = canvasRef.current.getContext("2d");
            canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            canvasCtx.drawImage(results.image, 0, 0, canvasRef.current.width, canvasRef.current.height);

            if (results.multiFaceLandmarks.length > 0) {
                const faceLandmarks = results.multiFaceLandmarks[0];

                // 🎯 Targeting ONLY the lip landmarks
                const upperLipIndices = [61, 185, 40, 39, 37, 0, 267, 269, 270, 409];
                const lowerLipIndices = [146, 91, 181, 84, 17, 314, 405, 321, 375, 78];

                canvasCtx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Red lipstick effect
                canvasCtx.beginPath();

                upperLipIndices.forEach((index) => {
                    const point = faceLandmarks[index];
                    canvasCtx.lineTo(point.x * canvasRef.current.width, point.y * canvasRef.current.height);
                });

                lowerLipIndices.reverse().forEach((index) => {
                    const point = faceLandmarks[index];
                    canvasCtx.lineTo(point.x * canvasRef.current.width, point.y * canvasRef.current.height);
                });

                canvasCtx.closePath();
                canvasCtx.fill();
            }
        });

        if (videoRef.current) {
            const camera = new Camera(videoRef.current, {
                onFrame: async () => {
                    await faceMesh.send({ image: videoRef.current });
                },
                width: 640,
                height: 480,
            });
            camera.start();
        }

        setLoading(false);
    }, []);

    return (
        <div className="virtual-tryon-container">
            <h2>Virtual Try-On</h2>
            <div className="video-container">
                <video ref={videoRef} autoPlay className="video-feed" />
                <canvas ref={canvasRef} className="video-overlay" />
            </div>
            {loading && <p>Loading AR Makeup...</p>}
        </div>
    );
};

export default VirtualTryOn;
