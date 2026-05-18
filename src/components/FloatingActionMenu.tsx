import { Mail, Download, Share2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MagnificationDock, type DockItemData } from './MagnificationDock';
import { useLang } from '../context/LangContext';

export default function FloatingActionMenu() {
  const { lang } = useLang();

  const items: DockItemData[] = [
    {
      icon:    <FaGithub size={20} />,
      label:   'GitHub',
      onClick: () => window.open('https://github.com/akinbs', '_blank'),
    },
    {
      icon:    <FaLinkedin size={20} />,
      label:   'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/akinbas/', '_blank'),
    },
    {
      icon:    <Mail size={20} />,
      label:   'Email',
      onClick: () => window.open('mailto:akinbas2002@gmail.com'),
    },
    {
      icon:    <Download size={20} />,
      label:   'Resume',
      onClick: () => {
        const link = document.createElement('a');
        link.href = lang === 'en' ? '/AkinBas_CV_ENG.pdf' : '/AkinBas_CV_TR.pdf';
        link.download = lang === 'en' ? 'AkinBas_CV_ENG.pdf' : 'AkinBas_CV_TR.pdf';
        link.click();
      },
    },
    {
      icon:    <Share2 size={20} />,
      label:   'Share',
      onClick: () => {
        if (navigator.share) {
          navigator.share({ title: 'Akın Baş Portfolio', url: window.location.href });
        } else {
          navigator.clipboard.writeText(window.location.href);
        }
      },
    },
  ];

  return (
    <div className="fixed bottom-4 right-6 z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <MagnificationDock
          items={items}
          panelHeight={64}
          baseItemSize={48}
          magnification={72}
          distance={120}
        />
      </div>
    </div>
  );
}
