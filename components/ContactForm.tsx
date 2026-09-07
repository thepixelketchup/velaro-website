"use client";

import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your inquiry. Our team will get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Name *</label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                </div>
                <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Email *</label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Phone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                </div>
                <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Subject *</label>
                    <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                    >
                        <option value="">Select a subject</option>
                        <option value="product">Product Inquiry</option>
                        <option value="project">Project Consultation</option>
                        <option value="samples">Request Samples</option>
                        <option value="dealer">Dealer Inquiry</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="label-caps text-muted-foreground mb-2 block">Message *</label>
                <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                />
            </div>
            <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 label-caps hover:bg-primary/90 transition-colors"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
