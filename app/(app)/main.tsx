"use client";

import { Card } from "@/components/ui/card";
import ToolBar from "./components/toolbar/toolbar";
import List from "./components/task-list/list";
import { useState } from "react";
import LoginForm from "./auth/login-form";
import { useLoginStore } from "@/store/use-is-login";

const Main = () => {
  const isLogin = useLoginStore((state) => state.isLogin);

  return (
    <>
      {isLogin ? (
        <Card className="w-[480px] md:w-[700px]  xl:w-[1200px] min-h-full px-10">
          <ToolBar />
          <List />
        </Card>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Main;
