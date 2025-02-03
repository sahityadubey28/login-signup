import React, { useState } from "react";
import { Mic } from "lucide-react";
import { toast } from "sonner";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isListening, setIsListening] = useState(false);

  const handleVoiceAuth = async () => {
    setIsListening(true);
    toast.info("Voice authentication coming soon!");
    
    // Simulate voice processing
    setTimeout(() => {
      setIsListening(false);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-md p-8 bg-white/20 backdrop-blur-lg rounded-3xl shadow-3d transition-all duration-500 hover:shadow-3d-hover animate-float">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Height Detection App</h1>
        <p className="text-neutral-dark text-lg">Authenticate with your voice</p>
      </div>

      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-6 py-2 rounded-lg transition-all duration-300 ${
            isLogin
              ? "bg-primary text-white shadow-lg"
              : "text-neutral-dark hover:bg-primary/10"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-6 py-2 rounded-lg transition-all duration-300 ${
            !isLogin
              ? "bg-primary text-white shadow-lg"
              : "text-neutral-dark hover:bg-primary/10"
          }`}
        >
          Sign Up
        </button>
      </div>

      <div className="flex flex-col items-center">
        <button
          onClick={handleVoiceAuth}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
            isListening
              ? "bg-primary/20 scale-110"
              : "bg-primary hover:bg-primary-hover"
          }`}
        >
          <Mic
            className={`w-8 h-8 text-white transition-all duration-500 ${
              isListening ? "animate-pulse" : ""
            }`}
          />
        </button>
        <p className="mt-4 text-neutral-dark">
          {isLogin ? "Login with your voice" : "Sign up with your voice"}
        </p>
      </div>
    </div>
  );
};

export default AuthCard;