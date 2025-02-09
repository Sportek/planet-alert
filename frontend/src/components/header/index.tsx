"use client";
import { useAuth } from "@/contexts/auth";
import PlanetAlertLogo from "@/images/logos/planet-white.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import RestrictedWidthLayout from "../restricted-width-layout";
import { Button } from "../ui/button";

const Header = ({ className }: { className?: string }) => {
  const navigate = useRouter();
  const { isAuthenticated, logout } = useAuth();
  return <div className={cn("w-full h-16 min-h-16 bg-emerald-600 flex items-center", className)}>
    <RestrictedWidthLayout>
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate.push("/")}>
          <Image src={PlanetAlertLogo} alt="Planet Alert Logo" width={32} height={32} />
          <div className="text-2xl font-bold invisible md:visible text-white">Planète Alerte</div>
        </div>
        <div className="flex items-center gap-2">
          {isAuthenticated ? <Button variant="outline" onClick={() => logout()}>Déconnexion</Button> : <><Link href="/login"><Button variant="outline">Connexion</Button></Link>
            <Link href="/register"><Button>Inscription</Button></Link></>}
        </div>

      </div>
    </RestrictedWidthLayout>
  </div>;
};

export default Header;