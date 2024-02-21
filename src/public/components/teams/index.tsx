import { DetailsHTMLAttributes, PropsWithChildren } from "react";
import { Index as GryffindorIndex } from "./gryffindor";
import { Index as HufflepuffIndex } from "./hufflepuff";
import { Index as RavenclawIndex } from "./ravenclaw";
import { Index as HogsmeadeIndex } from "./hogsmeade";
import { Index as PhoenixIndex } from "./phoenix";
import { Index as BroomsticksIndex } from "./broomsticks";
import { Index as KingsCrossIndex } from "./kings-cross";
import { Index as QuidditchrIndex } from "./quidditch";

const TeamGroup = ({ children, name }: PropsWithChildren<{ name: string }>) => (
  <details
    open={localStorage.group === name}
    onToggle={(e) =>
      (localStorage.group = (
        e.target as DetailsHTMLAttributes<HTMLDetailsElement>
      ).open
        ? name
        : "")
    }
  >
    <summary className="cursor-pointer text-xl">{name}</summary>
    <div className="-mx-4 bg-ui-0">{children}</div>
  </details>
);

export const Teams = () => (
  <div className="grid gap-2 p-4">
    <TeamGroup name="Team Gryffindor">
      <GryffindorIndex />
    </TeamGroup>
    <TeamGroup name="Team Hufflepuff">
      <HufflepuffIndex />
    </TeamGroup>
    <TeamGroup name="Team Ravenclaw">
      <RavenclawIndex />
    </TeamGroup>
    <TeamGroup name="Team Hogsmeade">
      <HogsmeadeIndex />
    </TeamGroup>
    <TeamGroup name="Team Phoenix">
      <PhoenixIndex />
    </TeamGroup>
    <TeamGroup name="Team Broomsticks">
      <BroomsticksIndex />
    </TeamGroup>
    <TeamGroup name="Team Kings Cross">
      <KingsCrossIndex />
    </TeamGroup>
    <TeamGroup name="Team Quidditch">
      <QuidditchrIndex />
    </TeamGroup>
  </div>
);
