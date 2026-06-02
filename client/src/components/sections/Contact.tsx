import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input/max';
import 'react-phone-number-input/style.css';

const formSchema = z.object({
  name: z.string()
    .min(2, "Name is required")
    .regex(/^[A-Za-z\s.]+$/, "Please enter a valid name using letters only."),
  email: z.string()
    .min(1, "Email is required")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address."),
  phone: z.string()
    .min(10, "Please enter a valid phone number.")
    .max(15, "Please enter a valid phone number.")
    .regex(/^\d+$/, "Please enter a valid phone number.")
    .or(z.string().min(1, "Phone number is required").refine((val) => {
      return isValidPhoneNumber(val);
    }, {
      message: "Please enter a valid phone number."
    })),
  date: z.string().min(1, "Please select a date"),
  message: z.string().min(1, "Please provide a brief case summary."),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Appointment Request Sent",
      description: "We will contact you shortly to confirm your appointment.",
    });
    form.reset();
  }

  return (
    <section id="schedule-consultation" className="py-[40px] md:py-[40px] bg-muted/30 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="bg-white border border-border rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Schedule Consultation</h2>
            <p className="text-muted-foreground">
              Directly contact our team for expert legal advice on Criminal, CBI, ED, or NIA matters.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-muted/50 border-border text-foreground focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Phone Number</FormLabel>
                      <FormControl>
                        <div className={`flex h-10 w-full rounded-md border bg-muted/50 px-3 py-2 text-sm text-foreground transition-colors ${field.value && isValidPhoneNumber(field.value) ? 'border-green-500 focus-within:border-green-500 focus-within:ring-green-500' : field.value ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500' : 'border-border focus-within:border-accent focus-within:ring-1 focus-within:ring-accent'}`}>
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            placeholder="Enter phone number"
                            value={field.value}
                            onChange={(value) => {
                              field.onChange(value);
                            }}
                            onKeyDown={(e) => {
                              // If the current value is already a fully valid phone number
                              if (field.value && isValidPhoneNumber(field.value)) {
                                // Allow if user has selected text (meaning they are replacing it)
                                const target = e.target as HTMLInputElement;
                                if (target && target.selectionStart !== target.selectionEnd) {
                                  return;
                                }
                                // Prevent typing more numbers or spaces
                                if (/^[\d\s]$/.test(e.key)) {
                                  e.preventDefault();
                                }
                              }
                            }}
                            onPaste={(e) => {
                              if (field.value && isValidPhoneNumber(field.value)) {
                                const target = e.target as HTMLInputElement;
                                if (target && target.selectionStart === target.selectionEnd) {
                                  e.preventDefault();
                                }
                              }
                            }}
                            className="w-full bg-transparent border-none focus:outline-none"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@gmail.com" {...field} className="bg-muted/50 border-border text-foreground focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-semibold">Preferred Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="bg-muted/50 border-border text-foreground focus:border-accent" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground font-semibold">Brief Case Summary</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide brief details about your legal inquiry..." 
                        className="min-h-[120px] bg-muted/50 border-border text-foreground resize-none focus:border-accent" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-accent py-6 text-lg font-bold transition-all shadow-md">
                Request Consultation
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
