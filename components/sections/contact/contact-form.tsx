"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import landingData from "@/data/landingData.json";

interface ContactFormProps {
  formData: typeof landingData.es.contact.form;
}

export function ContactForm({ formData }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus("success");
      toast.success(formData.feedback.toastSuccess);
    } catch (error) {
      setStatus("idle");
      toast.error(formData.feedback.toastError);
    }
  };

  return (
    <Card className="h-full border-0 bg-transparent flex flex-col">
      <CardContent className="flex-1 pt-6 sm:pt-8 flex flex-col justify-center">
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1C058E] dark:text-white uppercase tracking-wider">
            {formData.feedback.title}
          </h3>
        </div>
        {status === "success" ? (
          <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center animate-in fade-in zoom-in duration-500">
            <div className="rounded-full bg-primary/10 p-4">
              <CheckCircle2 className="h-16 w-16 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                {formData.feedback.successTitle}
              </h3>
              <p className="text-muted-foreground text-balanced max-w-[280px]">
                {formData.feedback.successMessage}
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setStatus("idle")}
              className="mt-4"
            >
              {formData.feedback.sendAnother}
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">{formData.nameLabel}</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={formData.namePlaceholder}
                required
                disabled={status === "loading"}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">{formData.emailLabel}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={formData.emailPlaceholder}
                required
                disabled={status === "loading"}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                {formData.messageLabel}
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder={formData.messagePlaceholder}
                rows={4}
                disabled={status === "loading"}
                className="text-base sm:text-sm bg-background/50"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 text-base shadow-lg shadow-primary/20 group"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>{formData.feedback.loading}</span>
                </div>
              ) : (
                <>
                  {formData.submitButton}
                  <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
