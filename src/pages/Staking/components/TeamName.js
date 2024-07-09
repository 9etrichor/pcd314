import React from "react";
import { AiOutlineTeam } from "react-icons/ai";

export const TeamName = () => {
  const teamName = "test team"
  return (
    <div className={`border px-3 py-2.5 flex rounded-xl items-center border-[#9ca3af]`}>
      <AiOutlineTeam />
      <span className="text-md">Team: {teamName}</span>
    </div>
  )
}