import React, { useState, useEffect } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";

function ToggleDark() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const {systemTheme, theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  }, [])
  const themeChanger = ()=>{
    const currentTheme = theme === 'system' ? systemTheme : theme
    
    if(!mounted) return null
    if(currentTheme === 'dark'){
        setTheme('light')
    }else{
        setTheme('dark')
    }
  }

  function handleEvents(){
    handleClick()
    themeChanger()
  }
  return (
    <div
      
      className="p-2 bg-primary/20 rounded-[10px] cursor-pointer flex justify-center items-center"
      onClick={handleEvents}
    >
      {show ? (
        <IoMdSunny className="w-5 text-primary" />
      ) : (
        <IoMdMoon className="w-5 text-primary" />
      )}
    </div>
  );
}

export default ToggleDark;
