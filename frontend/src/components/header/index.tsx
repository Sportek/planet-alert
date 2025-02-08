import { cn } from "@/lib/utils";
import RestrictedWidthLayout from "../restricted-width-layout";

import PlanetAlertLogo from "@/images/logos/planet.svg";
import Image from "next/image";
import { Button } from "../ui/button";


const Header = ({ className }: { className?: string }) => {
  return <div className={cn("w-full h-16 bg-zinc-200 flex items-center", className)}>
    <RestrictedWidthLayout>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={PlanetAlertLogo} alt="Planet Alert Logo" width={32} height={32} />
          <div className="text-2xl font-bold invisible md:visible">Planète Alerte</div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">Connexion</Button>
          <Button>Inscription</Button>
        </div>

      </div>
    </RestrictedWidthLayout>

  </div>;
};



export default Header;


