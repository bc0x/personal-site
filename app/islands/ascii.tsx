import { useEffect } from "hono/jsx";

const ASCII_NAME = `

bbbbbbbb
b::::::b
b::::::b
b::::::b
 b:::::b
 b:::::bbbbbbbbb        cccccccccccccccc   ooooooooooo xxxxxxx      xxxxxxx
 b::::::::::::::bb    cc:::::::::::::::c oo:::::::::::oox:::::x    x:::::x
 b::::::::::::::::b  c:::::::::::::::::co:::::::::::::::ox:::::x  x:::::x
 b:::::bbbbb:::::::bc:::::::cccccc:::::co:::::ooooo:::::o x:::::xx:::::x
 b:::::b    b::::::bc::::::c     ccccccco::::o     o::::o  x::::::::::x
 b:::::b     b:::::bc:::::c             o::::o     o::::o   x::::::::x
 b:::::b     b:::::bc:::::c             o::::o     o::::o   x::::::::x
 b:::::b     b:::::bc::::::c     ccccccco::::o     o::::o  x::::::::::x
 b:::::bbbbbb::::::bc:::::::cccccc:::::co:::::ooooo:::::o x:::::xx:::::x
 b::::::::::::::::b  c:::::::::::::::::co:::::::::::::::ox:::::x  x:::::x
 b:::::::::::::::b    cc:::::::::::::::c oo:::::::::::oox:::::x    x:::::x
 bbbbbbbbbbbbbbbb       cccccccccccccccc   ooooooooooo xxxxxxx      xxxxxxx

`;

export default function Ascii() {
  useEffect(() => {
    console.log(ASCII_NAME);
  }, []);
  return <></>;
}
