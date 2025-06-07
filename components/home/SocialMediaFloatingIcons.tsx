import Link from "next/link";
import Image from "next/image";

export default function SocialMediaFloatingIcons() {
    const whatsappMessage = `ಗಂಧದಗುಡಿ ತೋಟ ಬ್ಯಾಹಟ್ಟಿಗೆ ಸುಸ್ವಾಗತ!

ನಮ್ಮ ಸೇವೆಗಳ ಬಗ್ಗೆ ವಿಚಾರಿಸಿದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮಗೆ ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಂತುಷ್ಟರಾಗಿದ್ದೇವೆ:

ಸ್ಥಳ: ಹೇಬ್ಸೂರ್ ರಸ್ತೆ, ಬ್ಯಾಹಟ್ಟಿ, ಕರ್ನಾಟಕ 580023
ವೇಳೆ: ಬೆಳಿಗ್ಗೆ 10:30 - ಸಂಜೆ 6:00 (ಎಲ್ಲಾ ದಿನಗಳೂ)
ಸಂಪರ್ಕ: +91 9740806599
ಇಮೇಲ್: gandhadagudigardenbyahatti@gmail.com

ನಮ್ಮ ಚಟುವಟಿಕೆಗಳು:
• ಮರ ಮನೆ ವಾಸ
• ಗರಡಿ ಮನೆ (ಸಾಂಪ್ರದಾಯಿಕ ಜಿಮ್)
• ದೋಣಿ ಸವಾರಿ
• ಸಾಹಸ ಕಾಯಕಿಂಗ್
• ಜಿಪ್ ಲೈನ್
• ಈಜುಕೊಳ
• ಮಳೆ ನೃತ್ಯ
• ಹಕ್ಕಿ ವೀಕ್ಷಣೆ
• ಕುದುರೆ ಸವಾರಿ
• ಹಸು ಕೃಷಿ
• ಚೆಸ್ ಮತ್ತು ಕೇರೊಮ್
• ಅಗ್ನಿ ಶಿಬಿರ
• ತೀರಂದಾಜಿ
• ಮೇಕೆ ಸಾಕಾಣಿಕೆ
• ಕೋಳಿ ಕೃಷಿ
• ಟ್ರ್ಯಾಕ್ಟರ್ ಸವಾರಿ
• ಎಮ್ಮೆಕಾರು ಸವಾರಿ
• ಜಿಂಕೆ ಉದ್ಯಾನವನ
• ಮೊಲಗಳ ಮನೆ

ನಮ್ಮ ಪ್ಯಾಕೇಜ್‌ಗಳು:
• ವಿದ್ಯಾರ್ಥಿ ಪ್ಯಾಕೇಜ್
• ಕಾರ್ಪೊರೇಟ್ ಪ್ಯಾಕೇಜ್
• ಕುಟುಂಬ ಪ್ಯಾಕೇಜ್
• ವಾರಾಂತ್ಯ ಪ್ಯಾಕೇಜ್

ಹೆಚ್ಚುವರಿ ಸೌಕರ್ಯಗಳು:
• ಪಾರ್ಟಿ ಹಾಲ್
• ರೆಸ್ಟುರಾಂಟ್
• ಲಾನ್ ತೋಟ
• ಉಚಿತ ವೈಫೈ

ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?`;

    return (
        <>
        {/* Social Media Floating Buttons */}
      <div className="hidden fixed right-0 top-1/2 transform -translate-y-1/2 z-20 sm:flex flex-col">
        <Link href={`https://wa.me/919740806599?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" aria-label="Whatsapp">
          <Image
            src="/images/whatsapp.png"
            alt="Whatsapp logo"
            width={28}
            height={28}
            className="object-contain w-12 h-24"
          />
        </Link>
        <Link href="tel:+919740806599" aria-label="Phone" className="-mt-10">
          <Image
            src="/images/call.png"
            alt="Phone logo"
            width={28}
            height={28}
            className="object-contain w-12 h-24"
          />
        </Link>
    </div>
        </>
    );
}