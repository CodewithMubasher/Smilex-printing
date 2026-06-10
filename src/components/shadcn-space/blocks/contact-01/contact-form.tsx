"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  message: string;
  terms: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCountry: ${formData.country}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:smilex.isb@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full">
      <Card className="ring-0 p-8 gap-6 md:gap-8 border rounded-2xl animate-in fade-in slide-in-from-right-10 duration-1000 delay-100 ease-in-out fill-mode-both">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-primary">
            Send us a Message
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                {/* form inputs */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-4">
                  <div>
                    <label htmlFor="firstName" className="sr-only">First name</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="dark:bg-background h-9 shadow-xs"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="sr-only">Last name</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="dark:bg-background h-9 shadow-xs"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="youremail@website.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="dark:bg-background h-9 shadow-xs"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="country" className="sr-only">Country</label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, country: value ?? "" }))
                    }
                  >
                    <SelectTrigger id="country" className="w-full h-9! dark:bg-background shadow-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">
                        United States
                      </SelectItem>
                      <SelectItem value="United Kingdom">
                        United Kingdom
                      </SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                      <SelectItem value="France">France</SelectItem>
                      <SelectItem value="India">India</SelectItem>
                      <SelectItem value="Pakistan">Pakistan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Let us know about your project"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-20 resize-none dark:bg-background shadow-xs"
                    required
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="terms"
                    checked={formData.terms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal text-primary select-none"
                  >
                    I have read and acknowledge the Terms and Conditions
                  </Label>
                </div>
              </div>
              {/* submit button */}
              <Button
                type="submit"
                size="lg"
                className="rounded-xl bg-blue-500 hover:bg-blue-500/80 text-white hover:cursor-pointer h-10"
              >
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
