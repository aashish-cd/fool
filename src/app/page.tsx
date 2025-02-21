'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, SmilePlus } from 'lucide-react';

export default function Home() {
    const [answer, setAnswer] = useState<string | null>(null);
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [attempts, setAttempts] = useState(0);

    const handleYesClick = () => {
        setAnswer('yes');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    const handleNoHover = () => {
        if (attempts < 6) {
            setNoButtonPosition({
                x: Math.random() * 500 - 100,
                y: Math.random() * 500 - 100,
            });
            setAttempts((prev) => prev + 1);
        } else {
            setAnswer('no');
            confetti({
                particleCount: 100,
                spread: 70,
                colors: ['#ff0000', '#ff69b4', '#ff1493'],
                origin: { y: 0.6 },
            });
        }
    };

    const getResponseMessage = () => {
        if (answer === 'yes') {
            return "Congratulations! You're honest and self-aware! 🎉";
        } else if (answer === 'no') {
            return "Wow! You caught the button! Maybe you're not a fool after all! 🎯";
        }
        return null;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                className="text-center"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                    animate={{
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                    }}
                >
                    Are you a Fool? <Sparkles className="inline-block ml-2" />
                </motion.h1>

                {!answer && (
                    <div className="flex gap-4 justify-center items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleYesClick}
                            className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            Yes! <SmilePlus className="inline ml-2" />
                        </motion.button>

                        <motion.button
                            animate={noButtonPosition}
                            onHoverStart={handleNoHover}
                            className="px-8 py-4 bg-gradient-to-r from-red-400 to-pink-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            No way!
                        </motion.button>
                    </div>
                )}

                {answer && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 text-xl font-semibold text-purple-800"
                    >
                        {getResponseMessage()}
                    </motion.div>
                )}

                {answer && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onClick={() => {
                            setAnswer(null);
                            setAttempts(0);
                            setNoButtonPosition({ x: 0, y: 0 });
                        }}
                        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
                    >
                        Try Again! 🔄
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
}
