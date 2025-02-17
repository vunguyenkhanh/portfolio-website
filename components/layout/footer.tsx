import { SocialLinks } from '@/components/shared/social-links';
import { Container } from '@/components/ui/container';

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <Container>
        <div className="py-8">
          <div className="flex justify-center mb-8">
            <SocialLinks />
          </div>
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Vũ Nguyễn Khánh. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
