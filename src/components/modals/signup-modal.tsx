/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { Loader2, X, CheckCircle2 } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { signupSchema, SignupFormData } from "../schema/signup.schema";


interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            city: "",
        },
    });

    if (!isOpen) return null;

    const onSubmit = async (data: SignupFormData) => {
        setIsPending(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Failed to submit lead");
            setIsSuccess(true);
            toast.success("Details submitted successfully!");
            setTimeout(() => {
                window.location.href = "https://dedroply.com";
            }, 2000);
        } catch (err: any) {
            toast.error(err.message);
            setIsPending(false);
        }
    };

    const handleClose = () => {
        reset();
        setIsSuccess(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-slate-100">

                <button
                    onClick={handleClose}
                    className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>

                {isSuccess ? (
                    <div className="py-12 text-center space-y-4">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 animate-bounce">
                            <CheckCircle2 className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">You&apos;re All Set!</h3>
                        <p className="text-sm text-slate-600 max-w-sm mx-auto">
                            Our team will contact you soon. Redirecting...
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                Enter your contact details.
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            {/* Full Name */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Malik Usman"
                                    {...register("name")}
                                    className={`w-full h-11 px-4 rounded-xl border bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:bg-white ${errors.name ? "border-rose-300 focus:ring-rose-500" : "border-slate-200 focus:ring-sky-500/20 focus:border-sky-500"}`}
                                />
                                {errors.name && <p className="text-[11px] font-medium text-rose-500 mt-1">{errors.name.message}</p>}
                            </div>

                            {/* International Phone Number */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <div className={`flex items-center w-full h-11 px-3 rounded-xl border bg-slate-50 focus-within:bg-white focus-within:ring-2 transition-all ${errors.phone ? "border-rose-300 focus-within:ring-rose-500" : "border-slate-200 focus-within:ring-sky-500/20 focus-within:border-sky-500"}`}>
                                            <PhoneInput
                                                {...field}
                                                international
                                                defaultCountry="PK"
                                                className="w-full text-sm font-mono outline-none"
                                                numberInputProps={{
                                                    className: "w-full bg-transparent outline-none ml-2 font-mono text-slate-900 placeholder:text-slate-400"
                                                }}
                                            />
                                        </div>
                                    )}
                                />
                                {errors.phone && <p className="text-[11px] font-medium text-rose-500 mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* City */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">City *</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Lahore"
                                    {...register("city")}
                                    className={`w-full h-11 px-4 rounded-xl border bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:bg-white ${errors.city ? "border-rose-300 focus:ring-rose-500" : "border-slate-200 focus:ring-sky-500/20 focus:border-sky-500"}`}
                                />
                                {errors.city && <p className="text-[11px] font-medium text-rose-500 mt-1">{errors.city.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full flex items-center justify-center rounded-xl bg-sky-600 h-12 text-base font-bold text-white shadow-lg shadow-sky-600/20 hover:bg-sky-700 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                                >
                                    {isPending ? (
                                        <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Submitting...</>
                                    ) : (
                                        "Start 7-Day Free Trial"
                                    )}
                                </button>
                            </div>

                            <p className="text-center text-xs text-slate-400 mt-3">
                                By signing up, you agree to Droply&apos;s Terms of Service and Privacy Policy. No credit card required.
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}