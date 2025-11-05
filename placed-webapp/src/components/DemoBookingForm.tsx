import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "Vorname muss mindestens 2 Zeichen lang sein.",
  }),
  lastName: z.string().min(2, {
    message: "Nachname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  company: z.string().min(2, {
    message: "Firmenname muss mindestens 2 Zeichen lang sein.",
  }),
  phone: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DemoBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      role: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API endpoint
      // For now, redirect to HubSpot booking page
      const hubspotUrl = `https://meetings-eu1.hubspot.com/ftemel?firstName=${encodeURIComponent(values.firstName)}&lastName=${encodeURIComponent(values.lastName)}&email=${encodeURIComponent(values.email)}&company=${encodeURIComponent(values.company)}`;
      window.location.href = hubspotUrl;
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-2 border-placed-green">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle className="w-16 h-16 text-placed-green" />
            <h3 className="text-2xl font-bold text-work-blue">Vielen Dank!</h3>
            <p className="text-muted-foreground">
              Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen melden.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-work-blue">Demo buchen</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns bei Ihnen, um einen passenden Termin zu finden.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname *</FormLabel>
                    <FormControl>
                      <Input placeholder="Max" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachname *</FormLabel>
                    <FormControl>
                      <Input placeholder="Mustermann" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-Mail-Adresse *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="max.mustermann@firma.de" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firma *</FormLabel>
                    <FormControl>
                      <Input placeholder="Mustermann GmbH" {...field} />
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
                    <FormLabel>Telefonnummer</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+49 123 456789" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ihre Rolle</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Bitte wählen Sie Ihre Rolle" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="personalvermittler">Personalvermittler</SelectItem>
                      <SelectItem value="zeitarbeit">Zeitarbeitsunternehmen</SelectItem>
                      <SelectItem value="verlag">Verlag</SelectItem>
                      <SelectItem value="stellenportal">Stellenportal</SelectItem>
                      <SelectItem value="personalberater">Personalberater</SelectItem>
                      <SelectItem value="headhunter">Headhunter</SelectItem>
                      <SelectItem value="recruiting-agentur">Recruiting-Agentur</SelectItem>
                      <SelectItem value="executive-search">Executive Search</SelectItem>
                      <SelectItem value="staffing">Staffing Unternehmen</SelectItem>
                      <SelectItem value="sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Haben Sie spezielle Fragen oder Anforderungen?"
                      className="resize-none"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#EBFF4A] text-gray-900 hover:bg-[#EBFF4A]/90 font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                "Demo buchen"
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Mit dem Absenden stimmen Sie unserer{" "}
              <a href="/datenschutz" className="text-work-blue hover:underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DemoBookingForm;

