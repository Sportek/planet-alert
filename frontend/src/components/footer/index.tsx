import PlanetAlertLogo from "@/images/logos/planet-white.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import RestrictedWidthLayout from "../restricted-width-layout";
import { Button } from "../ui/button";

const Footer = ({ className }: { className?: string }) => {

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 py-4 bg-emerald-600 text-white",
        className
      )}
    >
      <RestrictedWidthLayout className="gap-4 flex flex-col items-center justify-center">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center justify-start w-full gap-2">
              <Image
                src={PlanetAlertLogo}
                alt="Planet Alert Logo"
                width={32}
                height={32}
              />
              <div className="text-2xl font-bold">Planète Alerte</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-sm">
                Planète Alerte est une plateforme interactive qui permet aux
                citoyens de signaler incidents environnementaux et urgences
                locales sur une carte.
              </div>
              <Link href="/account/add-server" className="w-full">
                <Button className="w-full">Ajouter un signalement</Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-md font-bold">RESSOURCES</div>
            <div className="flex flex-col gap-2 text-sm *:py-1">
              <Link
                href="https://github.com/Sportek/planet-alert"
                className="text-white hover:text-zinc-100"
              >
                GitHub
              </Link>
              {/* <Link href="/" className="text-white hover:text-zinc-100"> */}
              API Documentation
              {/* </Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-md font-bold">AUTRES</div>
            <div className="flex flex-col gap-2 text-sm *:py-1">
              {/* <Link href="/" className="text-white hover:text-zinc-100"> */}
              Conditions générales d'utilisation
              {/* </Link> */}
              <Link href="/login" className="text-white hover:text-zinc-100">
                Connexion
              </Link>
              <Link href="/register" className="text-white hover:text-zinc-100">
                Inscription
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-full h-[2px] bg-white" />
        <div className="flex flex-row items-center justify-center w-full">
          <div className="text-xs text-white">
            <div className="flex flex-col items-center justify-center">
              <div>
                Copyright © 2025 Planète Alerte. Tous les droits sont réservés.
              </div>
            </div>
          </div>
        </div>
      </RestrictedWidthLayout>
    </div>
  );
};

export default Footer;