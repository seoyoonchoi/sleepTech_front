import React, { useEffect, useRef, useState } from 'react'

function practice01() {
  //웹캠의 비디오 스트림을 저장
  const [image, setImage] = useState<string|null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    async function setupWebcam() {
      const stream = await navigator.mediaDevices.getUserMedia({video:true});
      if(videoRef.current){
        videoRef.current.srcObject = stream;
      }
    }
    setupWebcam();

  }, []);

  const handleCaptureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if(video && canvas){
      const context = canvas.getContext('2d');
      if(context)  {
        context.drawImage(video, 0,0, canvas.width,canvas.height);
        const imageData = canvas.toDataURL('image/png');
        setImage(imageData);

      }
    }

  }
  
  



  return (
    <div><h1>카메라앱</h1>
    <video ref = {videoRef} autoPlay playsInline width = '320' height='240'></video>
    <button onClick = {handleCaptureImage}>이미지 캡쳐</button>
    <canvas ref={canvasRef} width = '320' height='240' style = {{display: 'none'}}></canvas>
    {image && (
      <div>
        <h2>캡쳐된 이미지</h2>
        <img src={image} alt="image" style = {{width: '320', height: '240'}} />
      </div>
    )}
    </div>
  )
}

export default practice01