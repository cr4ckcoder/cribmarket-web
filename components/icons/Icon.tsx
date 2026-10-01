"use client";

import {
  ChevronDown,
  Clock,
  FileText,
  Mail,
  Send,
  type LucideProps,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/SocialIcons";

const icons = {
  "chevron-down": ChevronDown,
  mail: Mail,
  facebook: FacebookIcon,
  send: Send,
  youtube: YoutubeIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  "file-text": FileText,
  clock: Clock,
} as const;

export type IconName = keyof typeof icons;

type Props = LucideProps & {
  name: IconName | string;
  className?: string;
};

export function Icon({ name, className, size = 18, ...props }: Props) {
  const Cmp = icons[name as IconName];
  if (!Cmp) return null;
  const resolvedSize = typeof size === "number" ? size : Number(size) || 18;
  return <Cmp className={className} size={resolvedSize} {...props} />;
}
