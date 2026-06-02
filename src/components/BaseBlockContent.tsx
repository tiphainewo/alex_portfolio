"use client";

import { ReactNode } from "react";
import UiTitle from "./UiTitle";

type BaseBlockContentProps = {
  children: ReactNode;
  title: string;
  color: string;
};

export default function BaseBlockContent({
  children,
  title,
  color,
}: BaseBlockContentProps) {
  return (
    <div className="relative h-full">
      <div className="absolute inset-0 flex flex-col">
        <div className="px-5 py-3">
          <UiTitle title={title} color={color} variant="black" />
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
}
