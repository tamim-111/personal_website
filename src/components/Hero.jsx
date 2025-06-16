import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md w-full px-4 space-y-6">
                    <div className="avatar justify-center">
                        <div className="w-48 md:w-64 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
                            <img
                                src="https://i.ibb.co/0R6CRJCN/myImage.jpg"
                                alt="Md. Tamim profile"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold">Md. Tamim</h1>
                        <h2 className="text-lg md:text-xl font-semibold">Front-end Web Developer / CSE Student</h2>
                        <p className="text-sm md:text-base">Passionate about building responsive websites and web apps using modern tools & technologies.</p>
                    </div>
                    <div>
                        <a href="/resume.pdf" download>
                            <button className="btn btn-primary hover:scale-105 transition duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;