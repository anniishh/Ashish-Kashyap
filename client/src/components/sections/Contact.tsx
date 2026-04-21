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
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required").refine((val) => {
    return isValidPhoneNumber(val);
  }, {
    message: "Invalid phone number for the selected country"
  }),
  date: z.string().min(1, "Please select a date"),
  message: z.string().optional(),
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
    <section id="schedule-consultation" className="py-24 bg-muted/30 relative">
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
                        <div className="flex h-10 w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-colors">
                          <PhoneInput
                            international
                            defaultCountry="IN"
                            placeholder="+91 88514 27770"
                            value={field.value}
                            onChange={field.onChange}
                            limitMaxLength={true}
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
