import ContactClient from './ContactClient';

export const metadata = {
    title: '문의하기 | Lymin80 Shop - 게임 포털',
    description: 'Lymin80 Shop에 문의하세요. 서비스 이용, 버그 신고, 제안 사항 등 어떤 문의든 환영합니다.',
    alternates: {
        canonical: 'https://www.lymin80.shop/contact',
    },
    openGraph: {
        title: '문의하기 | Lymin80 Shop',
        url: 'https://www.lymin80.shop/contact',
        type: 'website',
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
