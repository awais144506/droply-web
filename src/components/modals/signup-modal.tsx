"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactSelect from "react-select";
import { toast } from "sonner";
import { Loader2, Sparkles, X, CheckCircle2 } from "lucide-react";

import { signupSchema, SignupFormData } from "../schema/signup.schema";

// Custom styled react-select configurations
const reactSelectClassNames = {
    control: (state: any) =>
        `flex min-h-11 w-full items-center justify-between rounded-xl bg-slate-50 border px-3 ${state.isFocused ? 'border-sky-500 ring-2 ring-sky-500/20' : 'border-slate-200'
        } shadow-none hover:border-sky-500 hover:bg-white transition-colors text-sm cursor-pointer`,
    valueContainer: () => "flex items-center gap-1 w-full m-0 p-0",
    singleValue: () => "text-slate-900 font-medium",
    input: () => "text-slate-900 m-0 p-0",
    placeholder: () => "text-slate-400 font-normal",
    indicatorsContainer: () => "flex items-center gap-1",
    dropdownIndicator: () => "text-slate-400 hover:text-slate-600 cursor-pointer",
    indicatorSeparator: () => "hidden",
    menu: () => "rounded-xl border border-slate-200 bg-white shadow-lg mt-1 text-sm overflow-hidden z-50",
    menuList: () => "max-h-48 custom-scrollbar p-1",
    option: (state: any) =>
        `cursor-pointer px-3 py-2 rounded-lg transition-colors ${state.isSelected ? 'bg-sky-50 text-sky-700 font-bold' : state.isFocused ? 'bg-slate-50 text-slate-900' : 'text-slate-700'
        }`,
};

const businessTypeOptions = [
    { value: "WATER", label: "💧 Water Purification & Refill" },
    { value: "LPG", label: "🔥 LPG Gas Distribution" },
    { value: "MILK", label: "🥛 Dairy & Fresh Milk" },
    { value: "OTHER", label: "📦 Other Distribution" },
];

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
            fullName: "",
            phone: "",
            city: "",
            businessType: "WATER",
        },
    });

    if (!isOpen) return null;

    const onSubmit = async (data: SignupFormData) => {
        setIsPending(true);
        try {
            // Simulate backend API call to provision tenant branch & 7-day trial
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Onboarding Payload:", data);

            setIsSuccess(true);
            toast.success("Workspace created successfully!");

            // Redirect user to app portal after short delay
            setTimeout(() => {
                window.location.href = "https://dedroply.com";
            }, 2000);
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
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

                {/* Close Button */}
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
                            Our team will contact you soon. Redirecting you to your dashboard...
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
                                    {...register("fullName")}
                                    className={`w-full h-11 px-4 rounded-xl border bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:bg-white ${errors.fullName ? "border-rose-300 focus:ring-rose-500" : "border-slate-200 focus:ring-sky-500/20 focus:border-sky-500"}`}
                                />
                                {errors.fullName && <p className="text-[11px] font-medium text-rose-500 mt-1">{errors.fullName.message}</p>}
                            </div>

                            {/* Phone Number */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                                <input
                                    type="tel"
                                    placeholder="03001234567"
                                    {...register("phone")}
                                    className={`w-full h-11 px-4 rounded-xl border bg-slate-50 text-sm font-mono focus:outline-none focus:ring-2 focus:bg-white ${errors.phone ? "border-rose-300 focus:ring-rose-500" : "border-slate-200 focus:ring-sky-500/20 focus:border-sky-500"}`}
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

                            {/* Business Type Selector */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Business Type *</label>
                                <Controller
                                    name="businessType"
                                    control={control}
                                    render={({ field }) => (
                                        <ReactSelect
                                            options={businessTypeOptions}
                                            value={businessTypeOptions.find(b => b.value === field.value) || null}
                                            onChange={(opt) => field.onChange(opt?.value || "WATER")}
                                            isSearchable={false}
                                            unstyled
                                            classNames={reactSelectClassNames}
                                        />
                                    )}
                                />
                                {errors.businessType && <p className="text-[11px] font-medium text-rose-500 mt-1">{errors.businessType.message}</p>}
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