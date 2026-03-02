"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import BlurText from "@/components/BlurText";
import { useState } from "react";
import emailjs from '@emailjs/browser';
const YOUR_PUBLIC_KEY: string = 'x5ns0x845LwLgna6x';
export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', description: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setSubmitStatus({ type: null, message: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        // Validate Public Key configuration
        if (!YOUR_PUBLIC_KEY || YOUR_PUBLIC_KEY === '') {
            setSubmitStatus({
                type: 'error',
                message: 'Email service is not configured. Please contact the administrator.',
            });
            setIsSubmitting(false);
            return;
        }

        try {
            const result = await emailjs.send(
                'service_mdjy4m6',   // Check: Ensure this matches your EmailJS Service ID
                'template_xfhx27s',  // Check: Ensure this matches your EmailJS Template ID
                {
                    name: formData.name,
                    from_name: formData.name,
                    from_email: formData.email,
                    time: new Date().toLocaleString(),
                    message: formData.description,
                    // Note: Ensure these keys match the {{vars}} in your EmailJS template
                },
                YOUR_PUBLIC_KEY // Use the variable from the top of the file
            );
            if (result.status === 200 || result.text === 'OK') {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
                });
                setFormData({ name: '', email: '', description: '' });
            } else {
                throw new Error('Unexpected response from email service');
            }
        } catch (error: any) {
            console.error('EmailJS Error:', error);
            let errorMessage = 'Sorry, there was an error sending your message. Please try again later.';
            if (error.text) {
                errorMessage = `Error: ${error.text}`;
            } else if (error.message) {
                errorMessage = `Error: ${error.message}`;
            }
            setSubmitStatus({
                type: 'error',
                message: errorMessage,
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section id="contact" className="relative py-24 bg-[#05010a] overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-purple-500 mb-2">
                        Contact Us
                    </p>
                    <BlurText
                        text="IEEE SB NIT Durgapur"
                        delay={100}
                        animateBy="words"
                        direction="bottom"
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter justify-center uppercase italic"
                    />
                    <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg tracking-wide">
                        Mahatma Gandhi Avenue, Durgapur, West Bengal, India
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
                    {/* 1. Info Cards (Left Side) */}
                    <div className="lg:col-span-2 space-y-6">
                        <ContactInfoCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Location"
                            details={["Mahatma Gandhi Avenue, Durgapur,", "West Bengal, India"]}
                            delay={0.1}
                        />
                        <ContactInfoCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email"
                            details={["ieeesb.nitdgp@gmail.com"]}
                            delay={0.2}
                        />
                        <ContactInfoCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Phone"
                            details={["+91 6301641669", "+91 7439133972"]}
                            delay={0.3}
                        />
                    </div>

                    {/* 2. Advanced Form (Right Side) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3 p-8 md:p-10 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl"
                    >
                        <h2 className="text-lg sm:text-xl font-bold text-white mb-6 uppercase tracking-wider italic">Send a Message</h2>
                        {submitStatus.type && (
                            <div
                                className={`rounded-xl border p-3 sm:p-4 text-xs sm:text-sm mb-6 ${submitStatus.type === 'success'
                                    ? 'border-green-500/50 bg-green-500/10 text-green-400'
                                    : 'border-red-500/50 bg-red-500/10 text-red-400'
                                    }`}
                            >
                                {submitStatus.message}
                            </div>
                        )}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <FloatingInput
                                    label="Name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                                <FloatingInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-blue-400">Description</label>
                                <Textarea
                                    name="description"
                                    placeholder="Tell us how we can help"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                    className="min-h-[160px] bg-white/5 border-white/10 rounded-2xl focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-gray-600"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-14 bg-white text-black hover:bg-purple-600 hover:text-white rounded-2xl font-bold text-lg transition-all group disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                                {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* --- Helper Components --- */

function ContactInfoCard({ icon, title, details, delay }: { icon: React.ReactNode; title: string; details: string[]; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay, duration: 0.5 }}
            viewport={{ once: true }}
            className="group p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] transition-all flex items-start gap-5"
        >
            <div className="p-4 rounded-2xl bg-purple-600/10 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg">
                {icon}
            </div>
            <div>
                <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                <div className="space-y-1">
                    {details.map((item, index) => {
                        const isPhone = item.startsWith("+");
                        const isEmail = item.includes("@");

                        const href = isPhone
                            ? `tel:${item.replace(/\s/g, "")}`
                            : isEmail
                                ? `mailto:${item}`
                                : null;

                        return href ? (
                            <a
                                key={index}
                                href={href}
                                className="block text-gray-400 text-sm leading-relaxed 
                                           hover:text-purple-400 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ) : (
                            <p
                                key={index}
                                className="text-gray-400 text-sm leading-relaxed"
                            >
                                {item}
                            </p>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}

function FloatingInput({ label, ...props }: React.ComponentProps<typeof Input> & { label: string }) {
    return (
        <div className="space-y-2 flex flex-col">
            <label className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-400 ml-1">
                {label}
            </label>
            <Input
                {...props}
                className="h-12 bg-white/5 border-white/10 rounded-xl focus:ring-purple-500 focus:border-purple-500 transition-all text-white placeholder:text-gray-600"
            />
        </div>
    );
}
