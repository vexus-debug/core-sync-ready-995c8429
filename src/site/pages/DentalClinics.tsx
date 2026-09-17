import Layout from "@/site/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  CalendarClock,
  Check,
  ClipboardList,
  FileBarChart,
  MessageCircle,
  ShieldCheck,
  Smile,
  Users,
  Wallet,
} from "lucide-react";

const WHATSAPP = "https://wa.me/2349017758165";
const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 34 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const slide = (dir: "left" | "right" | "up") => ({
  hidden: {
    opacity: 0,
    x: dir === "left" ? -70 : dir === "right" ? 70 : 0,
    y: dir === "up" ? 60 : 0,
  },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: EASE } },
});

const viewport = { once: true, margin: "-70px" };

const modules = [
  {
    icon: ClipboardList,
    name: "Patient records",
    benefit: "One record instead of five folders per patient.",
    body: "Every treatment plan, prescription, visit, X-ray and note lives against the same patient — no digging through paper or a separate imaging folder. Personal details, emergency contact, medical history, allergies and alerts stay visible at the top of the profile.",
  },
  {
    icon: CalendarClock,
    name: "Scheduling",
    benefit: "Scheduling that doesn't collide.",
    body: "Book by patient, clinician, treatment and chair without double-booking a chair or a clinician who's off that day. Day, week and month views, a live chair-availability grid, a walk-in queue and waiting list keep the whole day moving.",
  },
  {
    icon: Smile,
    name: "Dental charting",
    benefit: "Clinical charting built around dentistry.",
    body: "Chart tooth-by-tooth — not in a paragraph someone has to re-read to work out what was actually done. Treatment planning, prescriptions and consent forms stay tied to the same patient record rather than kept separately.",
  },
  {
    icon: Wallet,
    name: "Billing & profitability",
    benefit: "Billing that doesn't leak revenue.",
    body: "Know what's owed, what's on a payment plan and what each treatment actually costs to deliver. Invoicing, estimates, expenses, staff commissions, revenue allocation and profitability reporting stay connected by treatment and clinician.",
  },
  {
    icon: Boxes,
    name: "Inventory",
    benefit: "Materials that don't run out mid-procedure.",
    body: "Know your stock levels before a filling starts, not while it's underway. Inventory, cost and valuation tracking, treatment materials, suppliers and purchase orders show what is available and what needs attention.",
  },
  {
    icon: ShieldCheck,
    name: "Oversight & access",
    benefit: "The right people seeing the right things.",
    body: "A dashboard brings together patient count, today's completion rate, pending payments, monthly revenue, today's schedule and live activity. Role-based access keeps finance, staff and audit screens with the people who need them.",
  },
];

const included = [
  "Full patient records, SOAP notes and tooth-tagged imaging",
  "Scheduling with chair and clinician conflict prevention",
  "Dental charting, treatment planning and consent forms",
  "Billing, payment plans, commissions and profitability reporting",
  "Inventory linked to treatments, suppliers and purchase orders",
  "Reports, analytics and role-based access control",
];

const roles = [
  "Owner",
  "Admin",
  "Dentist",
  "Receptionist",
  "Hygienist",
  "Assistant",
  "Accountant",
  "Lab technician",
  "Lab assistant",
];

const plans = [
  { label: "Quarterly", price: "₦15,000", period: "every 3 months" },
  { label: "Half-yearly", price: "₦30,000", period: "every 6 months", featured: true },
  { label: "Yearly", price: "₦60,000", period: "every 12 months" },
];

const DentalClinics = () => {
  return (
    <Layout>
      <div className="eye-theme">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <header className="mb-24 text-center">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
            >
              Clinexus for Dental Clinics
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={reveal}
              className="mx-auto mb-8 max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              The clinical work is solid.{