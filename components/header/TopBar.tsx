import { Instagram, Link } from "lucide-react";

export default function TopBarComponent() {
    return (
        <div className="relative z-10 bg-black/50 text-white py-2 px-4 flex justify-between items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-8">
          <div className="text-sm">TEL: +91 96204 65007</div>
          <div className="text-sm">info@ByahattiByahatti.com</div>
        </div>
        <div>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-4 w-4 text-white" />
          </Link>
        </div>
      </div>

    );
}