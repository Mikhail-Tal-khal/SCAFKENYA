"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { X, Smartphone, Building2, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "mpesa" | "airtel" | "bank";

export function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("mpesa");
  const [step, setStep] = useState<"select" | "details">("select");

  const resetModal = () => {
    setStep("select");
    setPaymentMethod("mpesa");
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-xl shadow-2xl w-full max-w-[360px] max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border p-3 flex-shrink-0">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-1.5 hover:bg-muted rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SCAFKENYA Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div>
              <h2 className="font-serif text-base font-bold text-foreground">
                Donate to SCAFKENYA
              </h2>
              <p className="text-xs text-muted-foreground">
                Health | Awareness | Hope
              </p>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="p-3 overflow-y-auto flex-1">
          {step === "select" && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground mb-3">
                Choose your preferred payment method:
              </p>

              {/* M-Pesa */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("mpesa");
                  setStep("details");
                }}
                className={cn(
                  "w-full p-2.5 rounded-lg border-2 transition-all flex items-center gap-2.5 text-left",
                  "border-border hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <div className="w-9 h-9 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm">
                    M-Pesa
                  </span>
                  <p className="text-xs text-muted-foreground">Lipa na M-Pesa Paybill</p>
                </div>
              </button>

              {/* Airtel Money */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("airtel");
                  setStep("details");
                }}
                className={cn(
                  "w-full p-2.5 rounded-lg border-2 transition-all flex items-center gap-2.5 text-left",
                  "border-border hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <div className="w-9 h-9 bg-[#E4002B] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm">
                    Airtel Money
                  </span>
                  <p className="text-xs text-muted-foreground">Lipa na Airtel Money</p>
                </div>
              </button>

              {/* Bank Transfer */}
              <button
                type="button"
                onClick={() => {
                  setPaymentMethod("bank");
                  setStep("details");
                }}
                className={cn(
                  "w-full p-2.5 rounded-lg border-2 transition-all flex items-center gap-2.5 text-left",
                  "border-border hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <div className="w-9 h-9 bg-[#00A3E0] rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-4 w-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-foreground text-sm">
                    Bank Transfer
                  </span>
                  <p className="text-xs text-muted-foreground">Kenya Commercial Bank (KCB)</p>
                </div>
              </button>
            </div>
          )}

          {step === "details" && (
            <div className="space-y-3">
              {paymentMethod === "mpesa" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">M-Pesa Payment</h3>
                      <p className="text-xs text-muted-foreground">Lipa na M-Pesa Paybill</p>
                    </div>
                  </div>

                  <div className="bg-[#4CAF50]/10 rounded-lg p-3 space-y-1.5 border border-[#4CAF50]/20">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Business Number:</span>
                      <span className="font-bold text-foreground">954049</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Account Number:</span>
                      <span className="font-bold text-foreground">SICKLE CELL</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium text-foreground">As desired</span>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-2.5">
                    <p className="text-xs text-muted-foreground font-medium mb-1.5">How to pay:</p>
                    <ol className="text-xs text-muted-foreground space-y-0.5 list-decimal list-inside">
                      <li>Go to M-Pesa menu</li>
                      <li>Select Lipa na M-Pesa</li>
                      <li>Select Paybill</li>
                      <li>Enter Business No: <span className="font-semibold text-foreground">954049</span></li>
                      <li>Enter Account No: <span className="font-semibold text-foreground">SICKLE CELL</span></li>
                      <li>Enter Amount & PIN</li>
                    </ol>
                  </div>
                </div>
              )}

              {paymentMethod === "airtel" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#E4002B] rounded-full flex items-center justify-center">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Airtel Money</h3>
                      <p className="text-xs text-muted-foreground">Lipa na Airtel Money Paybill</p>
                    </div>
                  </div>

                  <div className="bg-[#E4002B]/10 rounded-lg p-3 space-y-1.5 border border-[#E4002B]/20">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Business Number:</span>
                      <span className="font-bold text-foreground">954049</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Reference:</span>
                      <span className="font-bold text-foreground">SICKLE CELL</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-medium text-foreground">As desired</span>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-2.5">
                    <p className="text-xs text-muted-foreground font-medium mb-1">USSD Option:</p>
                    <p className="text-sm font-bold text-foreground">Dial *222#</p>
                  </div>
                </div>
              )}

              {paymentMethod === "bank" && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-[#00A3E0] rounded-full flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">Bank Transfer</h3>
                      <p className="text-xs text-muted-foreground">Kenya Commercial Bank (KCB)</p>
                    </div>
                  </div>

                  <div className="bg-[#00A3E0]/10 rounded-lg p-3 space-y-1.5 border border-[#00A3E0]/20">
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Bank:</span>
                      <span className="font-bold text-foreground">KCB</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Account Name:</span>
                      <span className="font-bold text-foreground">SCAF KENYA</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Account Number:</span>
                      <span className="font-bold text-foreground">1237037131</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Branch:</span>
                      <span className="font-medium text-foreground">Kilindini</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">SWIFT Code:</span>
                      <span className="font-bold text-foreground">KCBLKENX</span>
                    </div>
                  </div>
                </div>
              )}

              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-full bg-transparent text-xs"
                onClick={() => setStep("select")}
              >
                Choose Another Method
              </Button>
            </div>
          )}
        </div>

        {/* Footer with Close Button */}
        <div className="border-t border-border p-3 bg-muted/50 flex-shrink-0 space-y-2">
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
            <CheckCircle className="h-3 w-3 text-[#4CAF50]" />
            <span>Secure donation to SCAFKENYA</span>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            Need help? Call{" "}
            <a href="tel:+254726931076" className="text-primary hover:underline font-medium">
              +254 726 931076
            </a>
          </p>
          
          {/* Close Button at Bottom */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="w-full text-muted-foreground hover:text-foreground"
            onClick={handleClose}
          >
            <X className="h-4 w-4 mr-1.5" />
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
