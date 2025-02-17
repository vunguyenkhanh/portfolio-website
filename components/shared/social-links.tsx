'use client';

import { socialLinks } from '@/lib/config/social-links';
import { motion } from 'framer-motion';

interface SocialLinksProps {
  className?: string;
  showLabels?: boolean;
}

export function SocialLinks({
  className = '',
  showLabels = false,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map(({ icon: Icon, label, href }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground transition-colors hover:text-foreground"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">{label}</span>
          <Icon />
          {showLabels && <span className="ml-2">{label}</span>}
        </motion.a>
      ))}
    </div>
  );
}
