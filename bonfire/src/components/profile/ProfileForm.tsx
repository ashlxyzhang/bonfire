import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface Props {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    username: string;
  };
}

export default function ProfileForm({ user }: Props) {
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="required w-[180px]">
              First Name
            </Label>
            <Input id="name" disabled value={user.firstname} />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name" className="required w-[180px]">
              Last Name
            </Label>
            <Input id="name" disabled value={user.lastname} />
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email" className="required">
            A&M Email
          </Label>
          <Input id="email" disabled value={user.email} />
        </div>
        <hr className="my-2" />
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="age" className="required w-[180px]">
              Age
            </Label>
            <Input id="age" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="gradyear" className="required w-[180px]">
              Graduation Year
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
                <SelectItem value="2028">2028</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="gender" className="required">
              Gender
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="man">Man</SelectItem>
                <SelectItem value="woman">Woman</SelectItem>
                <SelectItem value="nonbinary">Non-Binary</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="interest" className="required">
              Interested in?
            </Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="men">Men</SelectItem>
                <SelectItem value="women">Women</SelectItem>
                <SelectItem value="everyone">Everyone</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="intent" className="required">
            Looking for?
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select intent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="long">Long-term</SelectItem>
              <SelectItem value="long-short">
                Long-term, open to short
              </SelectItem>
              <SelectItem value="short-long">
                Short-term, open to long
              </SelectItem>
              <SelectItem value="short">Short-term</SelectItem>
              <SelectItem value="friends">New friends</SelectItem>
              <SelectItem value="anything">Anything goes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <hr className="my-2" />
        </div>
        <Label className="text-gray-500">Optional</Label>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="interests">Passions</Label>
          <Input id="passions" />
        </div>
      </div>
    </form>
  );
}
