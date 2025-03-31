import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginStore } from "@/store/use-is-login";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginForm = () => {
  const { updateLogin } = useLoginStore();
  const [attempt, setAttempt] = useState<number>(0);
  const [password, setPassword] = useState("");
  const disabled = attempt === 3 ? true : false;
  const handleSubmit = () => {
    if (password !== "Testpassw0rd!") {
      if (password.trim().length > 0) {
        setAttempt((prev) => prev + 1);
      }
    }

    if (password === "Testpassw0rd!") {
      updateLogin(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAttempt(0);
    }, 60000);

    return () => clearTimeout(timeoutId);
  }, [disabled]);
  console.log("attempt", attempt);

  return (
    <Card className="w-[350px] p-0 py-5">
      <CardHeader>
        <CardTitle className="text-center">Login to Continue</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Email..." type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="Password..."
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button className="w-full" disabled={disabled} onClick={handleSubmit}>
          Continue
        </Button>
        {disabled && (
          <p className="text-center text-xs text-red-500">
            You attempt to login 3 times. Please try again after 1 minute.
          </p>
        )}
        <Link
          className="text-sm text-black/70"
          href="#"
          onClick={() => {
            window.open(
              "https://www.google.com",
              "newWindow",
              "width=800,height=600,scrollbars=yes,resizable=yes"
            );
          }}
        >
          Forgot Password?
        </Link>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
