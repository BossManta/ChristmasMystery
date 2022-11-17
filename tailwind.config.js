/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        FloatToScreen: {
          '0%': {top: "-6em", left: "48%", display: "block"},
          '33%': {left: "52%"},
          '66%': {left: "48%"},
          '100%': {top: '50%', left: '50%', transform: "translate(-50%,-50%)" },
        },
        Wiggle: {
          '25%': {transform: "rotate(-10deg)"},
          '50%': {transform: "rotate(10deg)"},
          '75%': {transform: "rotate(-10deg)"},
          '100%': {transform: "rotate(0deg)"},
        }
        ,
        LidLift: {
          '0%': {transform: "scale(1)"},
          '8%': {transform: "scale(1.2)"},
          '16%': {transform: "translate(0,0) rotate(0) scale(1)"},
          '50%': {transform: "translate(2em,-3em) rotate(50deg)"},
          '100%': {transform: "translatex(calc(20em + 50%))"},
        },
        BoxDrop: {
          '0%': {transform: "translatex(-50%) scale(1)"},
          '8%': {transform: "translatex(-50%) scale(1.2)"},
          '16%': {transform: "translatex(-50%) rotate(0) scale(1)"},
          '50%': {transform: "translatey(3em) rotate(-50deg)"},
          '100%': {transform: "translatex(20em)"},
        },
        TextPulse: {
          '0%, 100%': {transform: "scale(1)"},
          '50%': {transform: "scale(1.03)"},
        },
        ZoomOff: {
          '0%': {transform: "translate(0) scale(1)"},
          '100%': {transform: "translatex(20em) scale(0.1)"},
        }
      },

      animation: {
        FloatToScreen: 'FloatToScreen 1.5s ease-in-out forwards 1',
        Wiggle: 'Wiggle 1.5s ease-in-out forwards 1',
        LidLift: 'LidLift 1.5s ease-in-out forwards 1',
        BoxDrop: 'BoxDrop 1.5s ease-in-out forwards 1',
        TextPulse: 'TextPulse 0.2s ease-in-out 1',
        ZoomOff: 'ZoomOff 0.5s ease-in-out forwards 1'
      }
    },
  },
  plugins: [],
}