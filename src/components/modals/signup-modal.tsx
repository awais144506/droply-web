/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import { Loader2, X, CheckCircle2 } from "lucide-react";
import "react-phone-number-input/style.css";
import { signupSchema, SignupFormData } from "../schema/signup.schema";
import { FormInput } from "../ui/form-input";
import { FormPhoneInput } from "../ui/form-phone-input";
import { FormProvider } from "react-hook-form";


interface SignupModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [isPending, setIsPending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const methods = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            phone: "",
            city: "",
        },
    });

    const { handleSubmit, reset } = methods;
    if (!isOpen) return null;

    const onSubmit = async (data: SignupFormData) => {
        setIsPending(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            if (!response.ok) {
                const rawMessage = responseData?.message || "Failed to submit lead";
                const errorMessage = Array.isArray(rawMessage) ? rawMessage[0] : rawMessage;
                throw new Error(errorMessage);
            }

            setIsSuccess(true);
            toast.success("Details submitted successfully!", { position: "top-center" });
            setTimeout(() => {
                window.location.href = "https://dedroply.com";
            }, 2000);
        } catch (err: any) {
            toast.error(err.message || "Something went wrong.", { position: "top-center" });
        } finally {
            // Ensure isPending is always reset whether success or failure
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
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                                        Enter your contact details.
                                    </h3>
                                </div>


                                <div className="space-y-1.5">
                                    <FormInput
                                        label="Name"
                                        name="name"
                                        required
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <FormPhoneInput
                                        label="Contact Number"
                                        name="phone"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <FormInput
                                        label="City"
                                        name="city"
                                        required
                                    />
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
                            </div>
                        </form>
                    </FormProvider>
                )}
            </div>
        </div>
    );
}