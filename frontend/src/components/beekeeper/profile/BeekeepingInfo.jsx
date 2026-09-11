import {
  Activity,
  Box,
  CalendarDays,
  MapPinned,
} from "lucide-react";

import ProfileInfoItem from "./ProfileInfoItem";

const BeekeepingInfo = ({ profile }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ProfileInfoItem
        icon={Box}
        label="Beekeeper ID"
        value={profile.beekeeperId}
        iconClassName="text-amber-600"
      />

      <ProfileInfoItem
        icon={MapPinned}
        label="Apiary Location"
        value={profile.apiaryLocation}
        iconClassName="text-blue-500"
      />

      <ProfileInfoItem
        icon={Box}
        label="Total Hives"
        value={`${profile.totalHives} Active Hives`}
        iconClassName="text-orange-500"
      />

      <ProfileInfoItem
        icon={CalendarDays}
        label="Experience"
        value={profile.experience}
        iconClassName="text-violet-500"
      />

      <ProfileInfoItem
        icon={Activity}
        label="Beekeeper Status"
        value={profile.status}
        iconClassName="text-emerald-500"
      />
    </div>
  );
};

export default BeekeepingInfo;
