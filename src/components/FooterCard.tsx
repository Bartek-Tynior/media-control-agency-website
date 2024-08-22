import { Button } from "./ui/Button";

const FooterCard: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20 text-white">
            {/* Gradient Ball */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[200px] h-[500px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full filter blur-3xl opacity-70"></div>
            </div>

            {/* Content */}
            <div className="relative p-8 blured-bg text-white border border-white/10 shadow-lg rounded-lg max-w-xl text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to scale your brand to <span className="italic text-white/70">new heights?</span>
                </h2>
                <p className="text-gray-300 mb-6">
                    Book a free 15-minute discovery call to see if KLIK is the right fit for you
                    <br />
                    <span className="italic text-sm">(spoiler alert: it totally is).</span>
                </p>
                <Button>
                    Book a Call
                </Button>
            </div>
        </div>
    );
};


export default FooterCard;