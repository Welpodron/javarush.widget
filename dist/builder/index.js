"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.build = void 0;
const loger_1 = require("../loger");
// prettier-ignore
const buildIcon = () => `<svg xmlns="http://www.w3.org/2000/svg" width="109" height="24" fill="none" viewBox="0 0 109 24"><g clip-path="url(#a)"><path fill="#000" d="m35.1 5.6-3.98 12.97h3.74l.4-1.54h3.88l.42 1.54h3.73L39.31 5.59h-4.2Zm1.36 7.8.75-3 .72 3h-1.47Zm11.17-1.38-1.64-6.43h-4.1l3.46 12.86h4.56l3.45-12.86h-4.1l-1.63 6.43Zm8.23-6.42-3.99 12.97h3.74l.4-1.54h3.9l.4 1.54h3.74l-4-12.98h-4.19Zm1.35 7.8.75-3 .72 3h-1.47ZM26.14 5.6v3.34h1.12v4.32c0 .22-.04.42-.12.6a1.57 1.57 0 0 1-.82.82c-.2.09-1.28.13-1.5.13h-.85v.97c0 .98-.22 1.93-.62 2.79h2.52a5 5 0 0 0 2-.41 5.3 5.3 0 0 0 2.74-2.75c.27-.63.4-1.3.4-2.02V5.6h-4.87Z"/><path fill="#F27737" d="M78.07 18a6.1 6.1 0 0 1-1.6-2.68c-.22.17-.57.4-.7.46-.18.09-.38.16-.58.2-.2.05-.4.07-.6.07-.2 0-.38-.03-.54-.1a3.1 3.1 0 0 1-.79-.47c-.2-.17-.35-.33-.48-.47a4.94 4.94 0 0 0 2.15-3.47 5.1 5.1 0 0 0-.94-3.84 5.14 5.14 0 0 0-3.36-2.08c-.2-.02-.46-.03-.78-.03h-4.49v12.98h3.74v-2.72l.59.68a10.1 10.1 0 0 0 1.5 1.57c.32.27.7.53 1.12.78a4 4 0 0 0 1.05.4c.4.1.83.14 1.27.14a10 10 0 0 0 2.17-.24 6 6 0 0 0 1.01-.35 3 3 0 0 0 .69-.43l-.43-.4Zm-7.23-6.37c-.23.25-.53.37-.86.37h-.87V9.51h.87c.33 0 .63.12.86.36a1.3 1.3 0 0 1 0 1.77Zm33.93-6.03v4.57h-2.19V5.6h-3.73v12.98h3.73v-4.64h2.19v4.64h3.74V5.59h-3.74Zm-7.3 7.4a3.78 3.78 0 0 0-.61-1.05 4.38 4.38 0 0 0-2.1-1.39l-2.03-.66c-.13-.08-.24-.2-.33-.34-.1-.15-.07-.29.06-.42.17-.13.36-.2.58-.25.22-.03.45-.04.69-.01a12.22 12.22 0 0 1 2.69.71 52 52 0 0 0 .09-1.82l.01-.89v-.44l.03-.44a8.7 8.7 0 0 0-1.9-.46 11.2 11.2 0 0 0-1.87-.08c-.49 0-1 .08-1.54.21A3.8 3.8 0 0 0 89.11 7a3.67 3.67 0 0 0-.67 2.1c0 .22-.26 1.95 2.02 3.45.78.51 1.95.98 2.24 1.1a1.73 1.73 0 0 1 .7.47c.08.12.12.25.12.39-.03.2-.1.34-.24.42-.12.08-.29.12-.48.14-.3 0-1.27-.23-1.54-.33-.65-.23-2.22-.93-2.83-1.2v.15a5.98 5.98 0 0 1-1.16 3.53c2.46 1.25 4.4 1.5 5.77 1.42a5.1 5.1 0 0 0 3.49-1.4c.38-.36.65-.81.86-1.31a4.32 4.32 0 0 0 .08-2.93Zm-13.97.52c0 .3-.12.56-.35.78-.24.21-.5.33-.8.33-.3 0-.57-.12-.8-.34a1.03 1.03 0 0 1-.35-.77V5.55h-3.73v8.14a4.9 4.9 0 0 0 9.78 0V5.55H83.5v7.97h-.02Zm-63.84 6.1-6.51 3.78c-1.37.8-3.05.8-4.42 0l-6.52-3.78A4.42 4.42 0 0 1 0 15.78V8.21a4.4 4.4 0 0 1 2.21-3.83L8.72.6c1.37-.8 3.06-.8 4.42 0l6.52 3.78a4.46 4.46 0 0 1 2.21 3.84v7.57c0 1.58-.84 3.05-2.2 3.83Z"/><path fill="#fff" d="M8.15 13.05c.16.07.28.18.38.32.1.14.18.3.23.5.05.2.07.43.07.67v1.66c0 .43.06.84.17 1.23.11.4.3.76.59 1.08.27.34.64.63 1.09.89.45.26 1 .46 1.64.62l.57-1.45a1.6 1.6 0 0 1-.58-.35 1.74 1.74 0 0 1-.36-.53 2.8 2.8 0 0 1-.2-.69 6.26 6.26 0 0 1-.06-.8v-1.65c0-.55-.14-1.04-.43-1.48a2.9 2.9 0 0 0-1.39-1.06c.64-.26 1.1-.62 1.39-1.06.29-.44.43-.94.43-1.48V7.79c0-.28.02-.54.06-.8a2.23 2.23 0 0 1 .56-1.21c.15-.16.35-.27.58-.35l-.57-1.44c-.64.16-1.19.36-1.64.61-.45.25-.82.55-1.1.88-.27.33-.46.69-.58 1.08-.11.39-.17.8-.17 1.23v1.66c0 .5-.1.89-.3 1.18-.2.3-.5.44-.94.44v1.85c.21.01.4.04.56.13Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h109v24H0z"/></clipPath></defs></svg>`;
// prettier-ignore
const buildStyle = () => `<style>@font-face{font-family:"Inter";src:local("Inter"),url(data:@file/octet-stream;base64,d09GMgABAAAAAEVkABAAAAAAuUAAAEUBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGnYb4wQcxgYGYD9TVEFURACFBBEICoGpbIGICguFNAABNgIkA4pkBCAFhFgHIAwHG5akJxjbVKJmcB7AeZLmblfAbmV2O776Qdt6FCWc9IzZ//9/T5AyhjVRLwUUt/0XjsJSFKAJRBMhEkVpatA4Boaa03SlMqRl3S6JuxPXydFnwqina0kkZgvSBmlFo9R8oEgR3JqV6Lxue6782k/PWvKO0XJLLwsWLBz+voVu3YbD6wK/mYow9o7py/Wh7ajXcZn73CB/uiL/LZzTNpz2YH/YG9sruuQMHOej5vIQ7+9XnbrOp2FmxUQjjTYSM6NfLZBu5VooBcqcVnAAytwFCpZRKC1rVGSNsnYZU5E1X+sqiKCIiIiAdbEUNzgWSwRFQUVcvCxTS2FkHwYZi2u1p/Q1a8Zs889DN/++a/M14l7/BqhJjW6SmnSTGt3c4E/2jQAw4LDdz1u/ZsO2ahi2hQIOKMQw2AbzBRrkciJsPsKVUXYp//xzb+/51Vqn0pJQMBiBLH+Ag8EBDGEVbcKhAcndRzrLBePujGSdE26KdI3Nh+azn2BnJyDdddJfUQUQaiRBoEtBRMBw83imjogIpjrjPOEpc+qN7Xz93Hzn3ji15z96IMW5JO0NS7tP92v20+1iqh0VVPBmZkOCeAcnnqnbOy8aSxyT8v5/f6rrf1LgK6hf4oQdwGEp09SunTrT/e99wftfPyI7/bKcxBCQbCcVOKdS0JJlJzEEkKbSKKskKMguAEwEG/PcGWHs2HUnHpYOw95lzdx16eRapimTqeR1BdU5Y0uwVxauwlO6mTZNEccDalrg3F2B2Qi24rXpub7bf/X3rvD//8t3dnbS5QtV8uizULMQKivCEOfefzOUk0drN0OVL7VIWls+wlGEwY5iIQNCReEswlq8w/9+6ifV9fX5xWXma7TbkWeRtwNcGmwJwirvS//m+q0S63tGXv2uNG13Wvd6t7NFKYD8BGWCQlvBCzO8AhgeHBjAcHi+bdLl8+gGQ8qbcsZLaW3mTMrMaE/6rKFC5EQwbhCqMf/6bfj/+c64mN1tpbmEi0iQMFgrMoiISJBwec3+2r+puVrHgQKPVsECH79wCK89wGrwEWPaBCiAYwAUIhA4CEFUCDchEGEiIKIkQaRJh8iVC1GmDGLNGsSGDYgtWxDbUoQgIghIKIQCJHbHPkhohAYk3MMDAgF2pOGhrn5NJzeQvf+/pFiQhdzvHgmxIAwhSBwggAILRTSsQaYA4ixnBi5AuY+zOmjGr4uHEXoKQzkbB6b8HaoQZRX6Efrb6Snj1hcXtm56z8VhdFUv9aDU8kQd9HbhfNyzBHUtq58oxAMJQXcyCEX/Nle/veMz4ZMxdU/SO7QWN103Z9vC2MEHyHDuDQzBKGwla3BJfz/lNArOsxgGaoXz3Ih8DN7KWcWuiz5HBQK8GVlMWzIw4SKkk4Z7mpezf3mAt5VTsRVQHmXjXwve/ZwsiJn1YYgFT3bzG01nKnGQwlX1mzD+SVlGTitPP+LrbzkC3DysGetQz+BVlu7JIpmi4jbMYKsMR6qkkbn4pBYVKcu93jq/cUUZVaMysAOHqqzEDa+KZYlKWLvdfT3+S2aA3TTSeJTsR4uhZ+pmlwV8Z3Jwwx+qnBzEozZoSn40kVcIYdbEnoJqh/SchHkS5ebMZ1oGNgxfUxWwAd91xE0h63xnFhl52MIKfNtWd/1tITMjBUbFjCzCSlr6uKz7tCTNcjS+lSyg612DqeC9VUsho8pIB/sJ83nn6MEOUTDapj7BSC/I9tylaizNE60VLFU5kYTr7SoEM6rKIqwgGin6qb2QpX1vFzezbIqYzS3d1rxWx/1pdf9x8m33FyyIMlTHojZX7/L7XzII3908fh6Oo6OqY2cLgw+3k1v/5b628rUkfUl76zbNalJSe+VHDXYGzpLK9bg55okMwRdozcB8VhWzsfiigfjGrOhlGmu2x1XBLSN8hZPrcMzpwRkNCQQ2Rqu8/Dd6mbbLgSKZTi2ApaE2wrj3VKGrSgRV4ncxy4Y1CPPoMBX1uQlTk9fSHM4vXkZLPtHj9Z4Zndm2YcWXpXzHfUWQFVjYjwWx8Ql9DrR6k9zFRB8OfF3SayOaPkF4lJr/r++UKS6vKideEMn2A2GJ07PA0tDQBYfD4lpBz86GcGYgh2m5NBbCZmzar0CVi4sqtxSLzpbtUuHy+DghQjeLNzPdEx7qGbzF7XitizCiXbJzK4noMe7Oxhh+9zAbI3+1Cj0kS3a9J/gaxVpvAcM3vbKn0UKzW9D/yneBN+NkxyAw0oZOzvwo8xRNYjNjlJMBuDU/rRPb/RDT/Xo7C4pjch4iTx0TpY3N6MLsnBaDTdHCpDTJxCl4NC6sEEbeLBkeFqTDtfqM9EhUcY0ul6qf2VcD/9JHrPdiHm9e1MM8rDkQbnH7NCm8WWhp30ByLebauvs5T6y3/iCLkQs8RuFPs4R0Xvu6dyXJrry3dTZCtkxbeUZW6DGJ4cs1rqwXQXeqX/ScSG9dQNPFqq8K7/HR9aMFVUZhjNdzoYam76+sWrreuGvWSsThfOCa9pztUsXI7IKWT6owhbOUtOJmcQAmrfv1iq83KCvQf9cCbTZwZ9004Fnyf9DXFuHP3qqu7CgruuD8cvqX1v+Pp70FmoXe5vrsgXdbDuEevxXr7EbXZ8DQTIm/3nfcNrG+jvQbPhwDfrGmuhIf4cnv7fLK/+TaUCqTzRdK5Uq1Vm80W+1OtzcYTqaz+WK5Wm+2u/3bwZHs7EJxpdIqjht3Hrz58nNIsFBhIsWKEy9BomQZsuXJV6BQsWq16tRja3dWp3MuuKRPvysGXDXiOo5xk+6576FHHnti2gsvvfbWrDnzFix6b8kHy1Z89Mmqdd/89jdwiAAiiAghwiESoiEW4iERiqEUyqESxmESpkEK+3AI9/DApS4pxpNlKukWkgUxm1XQrk/jpLAZC1cLc5bgXTIijEfnE4ojFNNZ9XSrgvmMrH1I5iHVdfKybV2EWS3LkJ3IF/gRoYS2zUtC5Gp24nVmuZzdzCoFH+LKbElCtaIvLYNALvNL5hmsANXP1Jaeac7CC1XTWh6XdSMp3InHExm2BrP7WVfQ1UWZzMTL9agpKlHKD03BOLzNetzU3xtXUImzFCh5AtufQ6Ogo8bywgBoXJ5Mw5ChzF5DoUXLE9utsHdJgCZl1ix6uKNDqOsU4nfiZZyjYmlhBPEkkDjLzm5T1cXG5EtJMEAhb+uhLstZOvOjc+RC6GDEfqWPCXqYeiQ8YVovwEte8zZmjH3P/+cb/6LYHg0AAcXIShCfwBNzK8ISwziSpEiToeUvPm5dufGTX8XvVY2oMXq8lUOrX1j92OrO2Xlbj0pQaXQGk8XpdIGjrIuRkei1qUurBsIPDtL7/YfmSR/mI+UeOXrOUHCFWkY34nMf5iNqX24H8JGuX1gvaBCz90co6aEnQD9Zl18rZI4roNLoDCarerpZ74DZZbkcl+cKXJErAZ8Eb50MNhCxxY4DkLDH8XOXALjtKcJfASAQOgc5lEOySoqQ/vPsfIqZD+Wln/xcVHBVCxkpyueKZ6uT6XSTYMCABStw5EZyk1t+Iinudk8l+MlG8H9O+RfF9mgACCjQcMFdYFZBKczxFl3Bd8hR6GWD1GJIH5ssccSTQKLO9vlSgndNXaEGkH+RHEsnWiYrfCw+lQK3zQwBBBFCGBFEEUMciUK5Ew/1JNBNFoOUIfzZZLnEQBkLSQoUaLjgBgMP2DIP3WTSCwLTUfRpgFw1HnLIuvD0hLN+JKtch3NfjLqFZiTp29JfbDLEkwQS4xzW2TpfylJ9yQBX8wiG6wLnmTldz5x6cl7hciGoX8ne1vlFTscerSirSghB1HY0cnoLbZxlbn06zvrtWPn5CwqzY/MX2IrzqZqcUrdNhtrGFHVOC0PEegEaLrjBwANWcl+vnni60p/ZIBkMmQuT7ew79r/KUJQsYhChCBouuMHAA7bJYVr0UNVPOoMEl8qXTorCt87CX9rWB65wD1McJJiJKWQ6+G7xK+LsRAlldrGbPexFBbWYAQ1pAq0pbdSd+jB+TmynhTBPTF6CN0EE+9jEiyeBRGWP2ZztGPOyMrp8qAAqiqI4oEguaQB+Lgnm9X7yQatdfUnUHdYsPo23B1KPhMQuF8aXo/iBODtRQpld7GYPe1FB7RkRvWfM8agK6mLaFaxvueRHLtjMY37mml9r9Tclf3LZ35WI3/kWrsplgQOIg+CQE/KJORoi5KScTCcHpyjOtk3YyudQdh+L7Ni5BZU8Lwy08zVIaAmQcYovA1TlKigGIxmeht/ZCYEDDiXBSZEu8dUrpertWRq0yvWfuyLHXbETrkR7tdRZ55S5kI68kKnC7l9TiU431Lvllmbjw7V40H/cTnpu6czS38G5rlXd1nzVb8PdVZtu0O+9u2YrMDAUOETCWCiHskdhHGYeBykczYR7uHsJgeS7PPCbUWVzpySA8p2uuJL/ebXu9QXGS1MDbB4WRhpp/KqrIibP0Id+6pAIy/MKmgNb43aiH8f7YRf/+4dT9hLhzPjxjNsX4FrhHe/Z9f21vND5of7S6rFLbucCZAYB8aGEcq22GoxOTQD96bYE2yDsq9Y8AABdA3qJg2POR2lxxT6cgNmbd8exFcCazbcAlgHAICTnpQxK0gPvUsBejipNDESngICCINGsMTdZ8aMqbiTXApD8+7TqAgrqqoKE59rzBO0m3pi8iWB7JE/t9vkLsdLYNz4cYz1JhCXB+7L6dLPu3znesVGdtOgSe/JSpsaa0SvKZfPhSkVp6gG4LIulLSQN84Q5QjfhYOWodps5RjZ6yAzdO4Dtft8BwHDEcDzwMB/HBk+uDywpvAOBtPHHLwAdROb809t47naX6CTg3D02Lgbu/b+afwoe3z/uUDSsP/ARMQmw+eDfIWw9/PMyBAXWXk/5N2/YCi7ELXBB4iRPu2g/6ZEZEcnpv+QXwREdSZEVhXEk6uJkdEZvDBaLYqeP5nymRwl4/NASG+sg/gC52lXc8Mg/oNkBP9F+OSgCB9C48eDFP3VV5BZEpfQHftddFZ5MuGgFY3cHB9f0TWAYsZO+HQce4y1W61vtIgglGIHiRUJsMVCIozhim4AGrx+XkX5nK7NlvQL6pMyjqyQR5v/iSnVXNapOlV6Tamltqefr7fq6fmnAdfKm0iyac6O3pFbcWlpHG2iT7Xlbbn+6IDe+63WH7tcZvbgf6wP9Xp/vf4b40Bp2I2CkjbrRO0bHy7E+sTyK02BSZvjMn8dm7xyfs3NzCWJVFmH5QICY397aC0BEMerQcKUHZDZiAHW3FR4wLXoZRdZpqNW1O4qc6TeArM6kXwm7qJZW5zr5qlBgvc8uz/CAzqxL3lUEGEqe7hZv122DVXGg16Rrj8Hucieu1QdtMTh2tQb3aoPmGxzmaTCvhDScx4mb/fCsUKiTwUk/bQG7SFANg5N/liLepQIVNPVTfsG5hW9hkPGsGjl1Vz13DDplPIrHgKPTehzJNChPYZqip2eHaKj7KZG7uMk3cL+VTMiGdEiGFNQcJOR//2wHIIGgEDTChXAjGIQP4Ud4ER4EC8gZLw/Y2bUUfa5qLT/WHmHvKDRQ9vP3tyAHBsB3bTRlQdPYZe89KNc2zFbnGVVNRDWD9EjbMVi7/q8lvzDbeS5vZSOuds0pbxctSenQupZhBxU0RGn3VhypniIoBSiHvKcDilLXiNWEwBtrW99iq4k7IEHeWuLrr16SQP1ibwLWH27jALw06o3+g0L+XQKAhPt395e/UbBBIeQs1HL599qBjF68ldpXPujXFJc8eSE/y6d9dHRJE3iRlNplGZSS2KOp+LlMRpNGC1LT1b8ZH94YlxZit0odkblck9bzdlzwrvNNCSlS8vAEfhghLWlHHW51EVtt8tocz1rR2pSIRB2kaZ4QsEpohBFbLNj6Yj2z7cj7PvBH5CxBjvAkeVkAdCP6Wx0Qy3PUXuky7iIKi2KoLw6dr1lYtB0c8icpkfUy2eEx30+lr5kfFUb5dBpDyrzDYZy3ptNQ5iqLyctzUiLpniOmeUSqlOUy0WCWO6ch0MWr6KG0cy7HpUuoSt9LYLHIYQwaKn2qCY9lRQdUT8PMmfpqzT+D4xlfQuXgsM4fpTMgFSjAYpNvZDAiJyzjFY9t3pfJeXKsMygB2lVFvz1ta6G2095fRDR03CYnbN10aLaX0+oziequ+sm/5BTMl0KHYYhqGjHhmapHGXeH0wvOrgQ4ZZBRl3kUuBQVGj4TInArta4Ip5csbhoFwjR6aXsJcM0jBN8UltBPKgFumcQ6FGeTmnZIXprhlPcZEXfD2Sjw2+HwJVLcc5hmBXjXUUy1/g5+vv8N+NbEwzqsvOPyrKTTSL0AMJz+MtvKsqc7Q1sV9txoSYj27PHY+quUuNTWad5uBvenC3Oy8P0XebO3eKuPQX5euFlBWFn+s3cfx3LCSaeCRdVr1RnPPPfCy/nX3nj7tZv/D47hFORwDpeghGtQgxZuUDOYUpbJ1rBNmQ8JUO5HFgRly5GL+bWttkjxV6/shlst+/eqRKky5Q47osJRlarcdseoMQgUBe6QqRioYVAYjWIHBdVmK/YD/jSKxFSahBkwM2bDFMTRo9yz+8uJwkpVFngSRRZEEEjMs5XIwFH6/QN/iwFwOBuGVG5ffInLAYRdlGYg7+i4gXPgr2D8C57l2Y7d9hQdoqAyaurdd+QxXFo4VqFgxjmPsIfKV44caCZzGbKkPFU2jiDNtCdGT4OMMc0CiTbbQ5qjzlPghocQveMz3/uzdqFhCZ+aC0daXVWONkM1Kh51zefSPMYCx7uHNyH3gjgyKKKaVvoYZ/E+ssXx/eZ7vOAy6iO/nQl3uQUsannRoTVtBJutdUXAfkaYZI5l1tvhEKKedhlZb3mIqm/5CJyvcj4+uFcn5tFJQzGgOCQkcSlKGxNscSeAKFLIo4JGuiAxC5l9bvGEt3xnc6FB8xhraataTzNtdZVgyN3K+ZhzZVd/HTd007d6lDu/R0e9r3fEQDGJS5Ak1dwRzbDHkyBiZogPRJrpmT9XgQ0OucMz3vOdIxuaDs1iHpxTlE6E1VhjHVZjjTWv3k+k+tn/oHbRMIUjAsEOgL2/wv3Vow79rz2uQJGMcnA1q309G9SYprWgxDa3p6Od70YPe6fP+r4/Zz+0LOUrXNmq12D4OY+wsCUsayWrHbKBTW55Ozvdg73a5/3vGx0DHcdMaCY+U5xpv8nbvvsHfNSnfN5XfON3Pelnn/z7f+uf/Nv//tvlAcWhTJc5R94440UQ0aTApJw6jtFBL0OMcsw9XvCR3152fNYduvbqV6n6GSrDDAs9apMn7bJfjhTPfSTVr/7veluxdtP2PXPKI3qRJZVTaTW1xa6nwW532J2e9b6fS/lylfu85DN/hueMIEyCLCVqIQZMWrbj1AOvfPa/zem+a7qx27p7k7bdB4yaMm/Fxl1JZ5Pvv/XJt7/fMGCBG5AHxILSoCqohzMeBBBKLCnkUMxRGjgGm/P0M8Io95nhLUt8YZPNA7PAHDB8GCxGEqOI0cQY2NkeDnCoY53kDDMrUPA6bxYIfDHWHxUIfKusX5RWc/2lfJWrBjPmeqyrr78xArXVAKlOWqz3stb1H5hrBXKAApYAqJspuAAPQGyKeHJAkqIqRRFQYRfdJSLdMOpOdZfUXQ7X6NjwWJ26dE965yMvedhHNynSD0DB3oojI5rsPRtKU89IO+dh1d8zdocKr+8LoH77jbjZ2BcU6qERaqFF1/7QCa+VTELOWMSL7X6SaEuRyhQKTob7zyksFuzvgl4Bbrp/kBlvHZIfy9FuTJA43mVrH307DpRbOFzYrHkioZ4Rn+fef04qcrf/VhAQDCgMwoj1slUR1jY2qrrhsXnu4cHA0Lb2up2w1Xm8bvgv40yZJhDGYUsSCiaGgXkYy/yMUwkRati3SbMWrQUCZQl1EikpZfInjOGDwnWhhH/I9UrByjqJQOETxyEUILvgh7hHBA8Sz4PwQx7VKBAAWwS3AnZJLHyafU/b82rWpe2wmm1qax7NMrQVRtt3bebWdk0bubR11fVobVU08s1Q6ueghTmU+2GJS7dXwHNfZ2gDJDD4LPSzcfBK/p3UD2fh6xyFbJ3nKGQtkSQlSQIAwMzMFvKU3AdjcRABXvCfaYdp+owEQxsggdBmJUmSBAAAIGMKE62NhRHXFkIAGFValKYOzdWtnKOQrfMchexFwVHIujRJEgAAZmaWzfMOHIWCc845R5KkJEkAAJiZWbbP9CVHocg555wjSVKSJAAAzMwsm3kHjkLBOeecI0lSkiQAAMzMLNsXySVHocg555wjSVKSJAAAzMwse3TjKEeh4JxzzpEkKUkSAABmZsYszdq/vhiLgwhEse3D4XA4HIQQQogQQggBAAAAGIZhGK9Q72c+1i2MtxOk0Tkctpr5pcKMdmUQVX/UWgnzeMmyRTyODiFA6hYfOzylIBUzbRqzjqLGeoKGTAgAyKirEk5h/V0mBz7eUnjHJSBZe4XNtGtoeuJdFcRUPwiEO1WucBfETZmh2EEfmPT8j4DweglwTY2Kxw3mOUcL8HXVqn4Pp36tF9wVQMH1OHAu4H4AuOnNyDTgwG/bfB3HvcDuNaUDxIsBAxZwZjgIBBYKODkUcHaoR90rPAkRAnjY/WOTEGEILsIQQJyp4oEKgQqpPxyHCqrSyXlMHFdhfPJeFh4XWZqM5dgO7aCVoTJaXpbXZ0bh9/D7+JPjZfGKeCX8Hrwu3gRPrCfVuxpn3VndeHrzpP+2txNnpsUEK7SDWq6ltTkZXhovf8Q6eONPBzcA5BkA2702x836p3pzGnPqs80AP3nB7JHZltny2arZgdnsdw/f3X53+V3f2+sobwgT4JbegnhetKkDHU9JGRdX44rT0kJFtf67pVTzHhrR6Tq2G27199W+r04bBC8+OILEiJMg+UeeQIeqUrPvOz/1f8AJNHGTs5rNmQ01xqxYC+Nqu4iTmT/qtK8nLz6CKITDhWF/ryQt2rWaDn210mU6I0OHz7HPe8vueuecxdDywVNr1kNVpFXjoeuLFfdiT+yOvepx4YaBhsIDi58QYSJESZMhSyrc4f+w1qHKlDy269cZShbKnAlTlsxYILBxAIk9uz+yNXSRMqoAgej4al9P+IsSLUYEJHX85SoOhqfLLulzDQLJbScA4jaA8jYQjwAnXwBnvRJAvzpoFwfoULhyfZkGBZ0Y2YSz8XgQ2ncQk5qwVBT9fAhCkeuhRMxm4uKUOD1axg+mkIliSSwhJs9DouCIF7QTynK7JD4u+GG5RgHzAPIQdNwLGkymexDZJD0pySSNV3IfKlPszSNFFf0A5GDikno3NWjcRY61Y2KVp0Mm1zy2jQndctqjdDkgyRq3L7GM/gQuXM3ik4VVrQX4ZkiVW4gicUyMaa27xmQRSQ/IvCkdBUwsChFim5TJK1ce1yqb1O4ZnVuIhLLmtnPc+Fh7vX+Cwsk5/K3QnCKBiN3cLzTnnunRBJO5IvIonabibLNY4kSKcY0NXOOUEetsVX2tg07TpYVZlQfiqO3tnFKZDP7Y/vCvnD3t8Gf422aMslFEHEX+llojrDhzOJwVqmQW01xPpxPJLs7m2H4SZCJ8OSpTHRCp0m9AqxapqqVaXaymLYVx2qRNwh9EPYb5PBITh8aAwpPffpZtbXAUwiCGM/99Lwuu+avsno8pDDikwJtbXbX3+dg4VZWYyQCxlI3CZ+M5nucG/J2pbXT1axkJhll1VHQN8GzcRHfV3BllS6FsFEV+H7/RK8yWeZEG7fEcyMIw5k1QKgnEITRLSmxPkisT3Oh7KSs6X+9LsiVMKwIOL5a0cOY3r/c9c5XESJuVvjqcgNanun0Cdu8eQpHhc24N/ghVoeqDjqqIxXtLQoWMJaTjQdiImkjQNPAUeVGdgYxSCFLuNzpNmcUCIEVbFTgodBT4Xs3uWiI1spIVZwdt48CbFjCtYb3QtvmsYJee2M29WB6Pv1AIiTXKs6rjk7UhBwPuUzWpSswMS6uwbxtSyVFKlScFOiP7p5Ahxn5/CZMBVZFVLaDAsx5yg/Zn0HHULzIp3/VhIVq6Xtr35cH/zZbUim9KrFkFyoDaFBcrVoyteJmtmAQO0hj2lGocwIIudHxqd4oosTWbgP0qtatB3WruaFYuUpdTtW5rbGFUHlNlwVkp3pu7ZwgtkCbvRA+BIl95Mp0eLQqIUSYiXY0LUIyEcc1dZe5PaWJ/GTtRCRBeR6XEs1AJzDJ1kkz1xgdXfYcK24RbEAMXK5SC31F9fjAbcagJU4Il91OasqjTnQmiMmQrFvM79KxpUnSOvQ57XCkWx0uK6mGUh42KyBOR+EuI6mhiQWbPjF7bjAxEaYp4/mxZm9L7CTW9krbEyvyDUxogHV6CKMIGNKsFNsoQzDhIohE2LZpY3Mc9+tVOT6Bqa9ubI6u2mlsH8nG7pibKaKNJIZToUVShBU3lZUFjz3tC2O4rg+R0HluZy0+5siJuhGriqtGdD1OGLe1vw1fdFH7YVSkR9O9RnzFsP34u1dLxzHnxpK7BnYyz8XwHEqR2VipjBRfVMJWkA+OlLUX520ATQVlI5p3ZVdkGNhiPKVK8mVCxHnXjTwRzjSybMdKwX0IzbmKDB+sOe2EucmYDmcemxv9bZCH6MbnCDNddUcdr3JzCagG77ekp/7VpgXjqsbkSurwrMxqRElIazTLQXeVEqBgJ2lUWYqm4KxXEt1rAbsCqeoEQrtgy3fGwWB7TgtZAjlLbHzeA7ceaa+b8M2jS3K0cT8ftSv/Elpp8Gt2p0aAWSSq08MTopi1ok/L6SlmmWu3p7ooKwdnnl7jTw8MY5eNG4fGQnh9Sb2/Io7f6Bn2Hxv0QFemnoPH+41vkFJxmdLs6xZ1cYr87U7PQa6vvVqIxg7WfuSTYE5GilMmTuDKkPiymLKgKS0XfiaK8UE8z1owTXXVNDxmpumGWXwrO+jjSyNwFbeIGa0jmVZQWoVLvXSwW47soBfXYWbaGgovzjSTbgNJOAKJKUH7YIK55HYXCvwMGKs2sNVku6dYpmQQAiikN6KQ1GBlnw4jAlwSoYV6onKdni7EH+IXM57M48GTlfsE7YDz8MOm+q/QBtvq3UDEL/VTc6TnEfvrnJzUnn0qSVMnPJobZIaCEdrHoKAMWzsuneXI+edtiYj2xU4J/RznrHaiYD1HrnTH+M5xwpIBQMXU0MmiWWdeKO1VRsZup4u4LiHS4ouyLStBpWb2+YRT7NhAzm9biFnUpyZ8ywm7EhtEgkpACTffSU+b+x+f//bKi1Ck8aJSUTvOBw/LOz7giD3C15IiV2ChOtmSMKtadTuckwSKEt9Gc9fHPPYTxWcGjVzA6P+WRexJb62dLDjRE6sVL7nAelggsmNUWbmWw7rvVcOks8pnsBtbKDhulXwOa1z3WpQC1r+zmsIYkE8kX93MhoR2+sSlZsfTX8aPE58TobvZyD8bhZcvt8ES/oV9241fvaBICaDdH9RPYStxtQO6GOxQbj6cCjpwp6aPiEVLsND8kH/aaOMpDvNrl85Zw6uvX5Fa8/CxtwxhrqS+yFYq/a2LjqCRO8RezLGAs3ALFP3UzvcQI99ab+SL2pC2R3HYrBhqXHrZ2w9PjyXw2PZngaD4+PhnNxlxHHaXURtrsr5KXNrX12EwMo4VKNBA7OMt/CWGjgVin43A1O0jSZJD6YeBTZqsfaCUeUyr8wbiMal1fg9FY1SpbO57aDdRtDYH8UrcyFH3k8FOTHiBJA56xw/mQeU49EZXj74py3oxkGobCVsBTe/PS9f3kJaSNrc5XkRrM7MLiNUI01XP0h4Zpz1zoGGkivrRX/c6dOfkSHW6OLNP32RyKpc6Jgznsd9aVaDQ7+0oZNz/WOcm6GjrGx6e3M2uzz66fH+rfpHj18Y3PHOs5tliuaz08cwAkugHyewKVVLZhfBY4k6hNl29AM1TCykLhfqCTWWUWIlLHetjE1uX0ux8cKKqFs8KlBGnJJWiRDZ0ZZgefuLy5lbsMoTiWw7q+or7E2P2zo0gEPfu+fnG6XuFOgvfwV2Z/JBF525pfaPmGBjIS7geYsAkhQJ/f9Gu++neI4fFK5RCeExe047skSSZAYEhkYjhhjH9tL2sxo9NLRYq+nBzLwoWbm9i44QpZdCSH8GdxQos/D2/OZgPKKLEj/PYrysmbWAThV8fGlNGRWdfEzxI/MnVqTXHBKxz/rhRZUsCgB3KNS+Fgyljo7Oa7Wh53WBgwTlKb3cnmEB0JMOIfw8qR7bV5VMzFC49P18vK5PnkFit/+7XZU+pJ99LRjRWlWLOi2V2v+c6aaDXWzukJ7kn9FCyTWhSYLhYrWQYwpNwFr+btXFdrPxEK6VGgRdlRpcsL70mjFTGt2yF+umRCDRTB1OQ+BrKuTDJnp/z20s6Feg5A/TjhOe2bnKA3eIjvM4JaPIHiihJbwnumvdK8onGEGiUCCnN9fApzAvzzc3hu+bli0zIrpKmMuVFwpTfHza3sqKuHV4UrrczNjVYuYnv2UsgkPT0nezrF6cBokwBY64VDMgNqzpz2q/U7c6bGmwCAEanYPSpi2Z1GSoNWwILHkkFe20pL8sH+c6kMKfFM7sfpuc/rzrSjzOsW2o/qnGhKj3GxTyixCDS1FHXN1rcLIYVVJ2fJQvZ72Q1eJ/PMEM9yDbf6meoEsdv3kkSfltdQi1VDKdZJOPvvKFxJPs/Cc7vcJ5L9G/9Pu1KR6SvfRQZNQ9du1ytA1Q/Awobx7Y0fk5aEjbt3NszPfO/6kpSBffMmE7Oe1LMKVUpsocjsImy1vCmVlwGwsAZYENllLyogyslk3gROSYj1pN9XSk5r1GoYgv/lQ4JW9ECbTCWH+ueVyaK378RLPKtuKR3yOngqzpfvW0SikNhyScMj7O5r//+cIW7VF+OEgg5P9eqErF6t3RZpgnVhawZ7Db4AFr4Y7jUElQ70pT9yzG4G6q9hYGViwVsGzAdgGbhLYfSaisOpFxyjogEZePUZ5WwQe9CQeOCgmU4qeCG6JEFyarSgA+qHajT0Yik7Fnbf+b0vNgFgYt1qgHcAQvCFG9KgISue8x9FFG+/0SO/RZGv85BCjc9pnY1jAsdourE7dYLbRNogvxCo6OnB72LiV3+gnrpSUdNXv4uLDX5HT/92HWeIPa6oq31SwRAbj2AdtXWPqcKLL5DW+8Nm/bT7IvRRhV+H2cMKLG2anIuhxXt2/ucdN/ef42cXeSMJUMPW+MVh13hb1bwWZo5mMEQX3jMER1OYwvow1HnJufeyxZOnA2bu3Z/4is8zGsjkIwGB5PJGx7gNwMSDycnZqrPP325zD2dNseKu3s3LEz2O3NOXdR6f9FRxb/koVXyNtjEhpwVuntVo8chUVe7YsdAhv8OmA5zft/DGtGVU03O1LT14FFRsnfXi9toKXtjbiF+OOdboegcy4MYNichaQLKbnxij1l5yB/kXnLaJCT6i7xgowGtLrTKLk5nW5jXTFoZlGJ5SiDq+8iWAdWMnMgLcxbE10VpQEwOY2GXEA08V+ALcqu9fUIsGUNwPxzPq+7SOa/8i/c60+8fFsf39z0TCnnGQP/NahGS1BicOFO8mgbKYu4WIpITFCCWwEhELsVLabQRvpMRfCiMtUMVCcrFwerHantOwdxGMciuE5S56e/tgTzCgvUBVTsxblC6Bqsa0W9dqF9TJWui7zdeEEOD1r5XgKFM7H5Q/3sT0vvBfzJRREm8+/3FZko4mNzmC5nMwmSZkf1NI7DD79a6c+7U/iVfyg4czxO/N4FTIOVGd+vssXXIsHRmONQ4nbIXs+cWJfHR1HZKOU7QLzAXhufyfUX8jsQbyX87ya/T0qfHOXbWNXn7+8PCu9fH2rpnH87tmTqUYGlFpnB6aq5EhfT4EsQ8VJkxOE06gxPpDTklXXj4lHHJnLHrXcAaFA/J2CPlAehaRQssjOWQj5J0B9kdKyAGESGVHWyUOTq5h+O3ODMevNjRceyXLU1+DCiYamd7nj8VMGSfyFvAfkyPpaHA7R1B96Kk0QdZ+I+3JmXEokk0y8PI8hwo2U9jv3pv6yRxaAQsrPHwKtrF5XdR0lmT7OX8h7tOBkhc6k846JmQq2gn95trOwl3JCfb2yQ4mXMnKIlzOOuTrk33Q+jIYMBW++4xdDf60OhjsM/Z12qy5V5praEIgOb8owj03wG6gtNRuMDfAnRhubMPAUiYww+flTNrgrkSnxIUzgdxC5/wl20+kn6PG5cnb8vGsABYWfwsp2sVndjrqZ3lnB9tcycqxvpxz0Ns3+xDhclaW1ZWsYDCoUvjqNzIY9OPLtWD30eXTQiF3xmJ2DWfQGCDPADGyrtQdHbMQ5xZWEat26K12RukF2pkya273KoIdhL8Oxy0BYJx7iz5+TmoL7VO8Rg7pcOJX8rB0tAaMBxgk0F8Zpl98IlJ0X+a+nW3CbudMVkqdoIi8XXLcecv4Dsk2tgO3wDk/8ai74gjyfAAM5tYt/sBygYIXWdf+Nhcys6377oS+zEyrC1n+oGITHb0CWHghK6JbsXq86+Ta0UI0dD9ZSYTcvMoUcpI1IRNaAQMr6EHI7lJYbelBekdh4TWl9IOGeMNrgZTYt9pPG29/odcnYaTlncxBjuwjVqLIRcEQsgNZyG4FdHJaDWJHvLBbTUVZPG/6E2CBzrN9VJ1t5aNCewEqJAgLqG/xR7IimocXThxjLZxSLBNWK/19uvOlkOR3vpWWxOS0gJCE/Nj6meNRiZmBhINmBnFOFYwLpc5S58gPVufJL1WFKOgac/mVSTaLTJPN+M1ndDB49bN99Ntnk8+rgV8YXulRhOs5TIB1ePlmCZaZA1ThxRdI4H2czJ60J0IfVtg26D2tUE3+DJqJZHIbjnAjzNwnYSS0WAKWsMgj5LfrxWcMZwjzYlIQwZjP0apK8kWtEM/i8hA0a9t9kOjm99AraWHVxuG6HKUD2OWz+xgC+z3LnZxL/azBv3Afhz/O3CFIzco9xYYX52BFF9tr+H7f7F1oh/8GViyZ9+0zBGUX5vmFaEWe4QHJtrxob4tAEX6dJdW5ebgAzWdeaic+NArjglbgfnvpMjiXzT8KzJr+NdzS8KpYWWqCf2kH8uxq9x/t3DGF4htuWYY2oUCEqDNZR5sYwZZ+prrBAkhIaV5GZk1ZCnCXg+UShE+ET8atAHeF+mjKXvmP3+3pqjkKnuhzPBt05hTSCgdONkYsAwYeKwrrHNk43f3f58oClNcwWWky7JMIxCxo2Q3YPSsR4OqcXWEX4A8flxygRKyUubOf4VR8u8Nj486H7/XF/Q+hM4DfBC38EqBF+pSERW4rwaAMBj7hvj8XEFh4/k7Q5pEArvbRJxlJ4BdC54rQhwug3A9bv7l/f+7aHrJS+F/0//Xh7XZws/RqlU2OCjoglcTjtj9cXWmPEYj0kYRFNkjoXQa1qtlNnPWYAguEaUY3XP976nGp/QWH+C5kbeqo2pD4urKAdwDWAAtrgnZNUhB0un/H4GC/YtBJkEqQSqpwtEixIVpkVjglSYFrWL458kvggbnIb7nxxDnKlUHH12Mt1rLDIx4VqvG2hyUP1GL+Wl4/ZiT+49f+iblQv4cTEn8GUjzuv4vyLzlI6stMtOopPhRyqIhu3Z2cYXe5KAR4B2Bl6yL+4oXEFdEw9tOOYPKRPe7HJNvP+4MgYNoDJM+3Uw4rhdkPPr0XA3nWlwv9Q6LSYjQHIBai1AdT42ODiwKt+8FAG4APTgMfCKb08qg0odOZtA+t4jH4NBjiM3o4V3MDb4hW2DkO0ocW7XDKel9VF55Jo59tKCd9ldlruGxoMMsv6DoLsM8deQZBNAMCOVBDf9PnnsrLyLspg0KTuY4c7mJbSVVFh+NcUcj3GMy1k7z7Dt858ZPS2ez1DCm+zw1kAy8fJSM9h/0qPhD4wy54zo0CbnP2SGfChwS3D6FiDy7nfw01O6LpzbySFST05l0Q7koq06tcPdjkVn9BjIeoRyt/y48PT53JH561/OY/IewLFnQdXMG/R2+BApSHM/mbOFzh5qNn4EJ99C5/C1fHumMH1Lfe+OMVUcdvEcARZr32nqgCYgcAFr4ARgc3IdX1yxgagz9W0ByTc8yZTu72aXlWbu65RLs8/+lH1zTdTs+veLYOSQ4k+7//JvH2xsacgEUlmODlP4azHsghA99Q1i6hZcZeXsUWjrFwAA7Q4prMw8foY77lpuRosAOidXiKsTO10Jgcgdi+QPrHJL3+e/Oa3HwV2w5d8+8uygh/lvv2F4Z6H4omtEE2LV8vWc0TN6Z4iU/4evEUbZK3A7grHgAWwIQhP+t7YlwOfWWWm3GuNNW/0tW1DugQRK2togZ4wTEXFWKfK3cdhYqHysMa8zgdt/nY6gF8J1v91pNR2+ABMOPId+hGr30pKwQp2EqvmZcxq7v9jMS+Iy1y7oMEvS44dGjAFhEWUPX9r+CeXeKAzNnje2AYpifsgi9/zvStdHetBT/wp1QfdfezSdR289JMASL4uNZWeMAXXXawwGilHx1qdGdiwZQhv5bS9BTDzk1/8vAIU0y4Q3Hm71nWzd/UyhcvACKQ1fn8D1tROFdsJ/2MJ7nsaUxS01qAbxnROdOZ4pJZbuftddiOrgTF2Tmj3Jb7VK5zmiUxnkQixqRauDinW9jExF8ijHQCGHfId2hHr62W5UnCNlXPy5nX3X5OYt+WE73wQTKkNjRs6KqtNE7Nt61gyjZhQLr92G4YgidjxJD+L1l+R91dq8EHfCjVR9x9iYna7l5ayWANXq7VRz1Ae33Hc6Pmdi5Wil/f6aYY+25RkrpZiK6hmzcV9Mn71Ow1zW1zUypJHuZuLt90aZm25OYbEUulzZU/uWrOd3wvK1gorapYz/M7vd9a0zGaYG1xMNHQOfxB0Lm+sF/15QNkk5Zf8a66Nsq6yW6i9qDeAaj3Fa2ot9CAQlRTY3RkU0NUWFtDJImUnGQLL7h+plmmKqf8cqu2hrCoJq1tcsp9Sy5BtdNoIibDWedDENU40NzU0JuuZWoaqk8IAtt7qEdD/IbMofuE3Cu/L6e6XD5aHmjksC8oUDvDW/VeZXRTI0RBRFNDdFhrA0TAAUQXi1iQoNJpNBmd7qLz/JCrcaC5maEXuNZ6hGAgdoQzyB2esmr1qz/Npa9nQ0f1g/7aWV4qPTQ3INFIRHO9tqUeYUhXLJkIQrf2JI7FPuF76RJUJhfsahTRu3pw9mxLVMHLOawVgSl6T0La5pSg0v1c/PzcFO8A7wvPsGzg4c8OA6PnYl9vIG5l+fnzxWUNwxMp7+9HCck3h6WlGO9N9gEn88NnYnQsdRbnm4XkV2En6sRQY3Hp+YVNHcKZaK04gc8JOJU6zdq6u6eyB2xPaS90l5Q2DoE4jKB8CxetQ2jWItjRcENJWff8YSzPxKDzP+xAnw8k/j0fSLkyB7qgNbARHIm5Q9ZaOOdmc2kCdsBtsuGxN+s5J/kL+Er0DUMv4KJbAqa1GJh4nmd+XX3BYjAIg6E4du9YUKBgotiznXWOckIMn2WE8HuPiVeC1hcYgKnoXVevr0bz7GNuJ9Z/F0gJgklYygv6u5aQsZ78RqFfvSOeuPTaWlaFX7crtczLuBuVHa57vMSXGdvkTjkef8iqpzEG2iWwEC6BBZfqZbOwECaYhXnHL0e3lCP2pA9ElnyPXv7Kp0Jj6If+QqOVFb28nvM6eRYiiRiN19PTye8WSXvsfZzlMw1Z0N7Gh21hnUaaLXzQDmda+LGtWt/XJqYU5O5N4WZUcu+JCbxUMPM+Z5C6N4F7sl7bFF4OiL/oqvZ1J4QWtPk4AZXnFwbaVr03e+VUmSO9I9Ctmxp4QPl3el86eKFZ8QIwqAf1RAX/1PSxlJSx9IyUUQvaMppCloz0MdCVhgO7htL60oBvN3Mx0OFmWgfB4EG8vqflCKS+B2UVWNiFk9pubfzEqjseGCl8D/IkUHZSjq+cViyA7/YTrgL1s3x49aBCChvLX0bCuD5K1/tt8EiTB1WCxEG3vI+1DG2LKEnL5aY4jwaILron3k+bNj+OgJJp31oGHA8sHr4ervUUf5QbmBv1SNznQM6rmVPu6b3YOPA1guWTTx8zvRHyXn/p6RU6ChEnI2d0NDpm9KfX6FgdAEKXJqq9GQB7Qs/TG7ZCgLujljyN5/lqfZjQKhHBaI0goTfexmnXdTV1p103nXbuU1NjSGCLO7SZHi1dHf03prk5Jrq5Eek0NkbHNDZjbieSUu3sUuyjWxqi56oGT/hqm+HDBHIUkGLsu3eM8SPiZu0mPJLA3Dkkc7e+1vecfQyd7KivZ+0diU6L4rkdJnOvoTLovEuYTy1RU8fGMxyVAULKaowd0Ck1rq+yBtWQMdCu9qI6VKeZrGPq2J1wmBE1DUaDCx7OUGds0RQbtU1UbGOTKqFZKglfb5QW8O5zWz276lAVvaiwCO50CHVnQCioGoqR4klmVrK1GQykEcgXIcobAWqHmPLxuo9rEPIxDTV4GFW6d32Dw96FuvkQ5zRT6xiys210hhFlvXpSPV5bN2d/HFnC9aTrm3pXhMbH3pn56lXmTjYbYCFWxg4GnnlxkqetjefECbZg24x+CvUNBBpu0Fz35299c/FiSs1dQaaZgHUylWwbb02Mt7MlJsQTbcnx1HmgmSCz6u5cSknzKTgZR0m35GXOKSWl09nwEl4+PXYqZZ96+Wq2OV7pFDrF5F6hmKo/UdeGIn9VQmXkn6Frv6Mqj/6KGh6O+g1Hj66Ag0ldgHwHL/Oum/2k/Um37Lsns1OzzUjTA4A1xeoyZlewQeW00uGF4uKF8sMA6zh8eD6yh8uBAssN9dx1dNz19BkItO7zF6iHhzYYPGU9pVL8PfxCba1/CR/Z6B8bWhgZ7jESyJWx/rcqFmsxxrqfmeBrZuhC8DBJ0aHYK0md3EFkZ9Z09ndWNK+f+gm4O20Rlelv3mQ3vucVexZxNPnVq6zmD/wiv80jMjNZ2RmprMyItDR2dkYGGzC7gEAm8BWetYsKIdlFhJMcI0JJpIgQkF1KTiYTzPoFd3q1hScf59wfukEu9qT4kBwDg4DKrmO0pS0YsVlKgwMsJaOOhWWeUgAsxAMWwKdoq50vkOKnQhVz1dxvYuum4ZjNoqcS4qIJJ/kTeD18QiN1pWmeZN9hSD3BWpHM6bux6/DJP50d4JRGi8N8S9HB7Te1pmgoZrVV3eBirU7/88LTPSRaJwPl4hQ0DOkNTR+FSy5eETnSsimaeMf7jJ3OmEkWzlvPt8GR6om3zBmUoYF0HbB4FC9Imd1WvQc8wfBtNWsv2Xq/7X7rWKKzWwjZxWYc/2a2ZT4i81Ksj0NzS2WafeMh/n9isOf7eutX/yNnUXFeAbHaFNckY2P9RGJY659WzxArHT0fM3tKrLG6DRJdzl7xq657FZh6Iii6LicUx1/Jf/JoSuxR9s8A4FocwSl9Ry2GFhsd4dcV/joshEm1NbsHFKnvInuFBcSUvq6LKwmIiu9e+xXIaGIfYzQF0hMaWKcZLeCryoM+zr3jojgBQp9fd33r525qEmxi7+hrZat4ET06fv/7VB2VWHYkK9K8lMY//gt0hWqfe6bXo/z1DgTut6PE6GupB5serFmscfQz1NhPMSRZhWgaKqMDc6ofu+YV3nKPrvT0Sk8OwvEX8pXlhxzMq3tLA1v21432KatkOS++hR/X2V/QsQtyBNAWKnnomdaA8tudHqVt6hzqZG4W6umhGbqjFaNh6iz+S1ZqhOd9ro5DYi89hB0en949HQQkIb9+rfo078cnHh/5t55UO7Q1LF2mruSDN4zOyYvi17Y6buPPuOgXeioyJb33ZXD1GiXezco8wp2qQ1XObrycGA6Vit/N+W1+Zf1T/G4NekLVb1yyKvwia6ujcNhAAUaBhyejZJxckDdKZpR4eiQW+AlgIwTqqyP8sipeuRxdMCZLM5SND9k46lEUnu3V9zH0nLBy1dbRdjYkHnA01NYha4Myl5t/v3Zduvcj1qMj2+sxtTd/X5coUVfywhvHZhVE8OtYtdrQ6UOpV6JmTd9zj67NPrMQD6oJTcUirzchCia9sCCCxUCiD7S1iJVt1hWxkJWV12U+B3YDZJZMrq5WBmR0BLdCtsCiv+VxD8QuBfzy/aV/Mf2372/gLZZ+UWCTly/5LvyFpXBRvoVw+Ms5ybKSTEdQHpV+xHQszJcciXhGECkpshCKeP5IMo9ZYAuuO5nROdHTD/Iamh8yI58mHlHTj/IamyZXNnLaYiWaYJHs7mmaYBNtY5Ti42aZ4kF7H82MffqAWXcURYGJ8uRRdmPjw9zIJ1bUiY1FAtXLZEzDFF83s3S+fo5Ao+Bnbk3cvKh+E9Qco8FMLogs5tYvObB9kLCtdxPCzMDohzsfWgR6rgdeuC4Asg0j/5C7Nx6Ug0O4BsXCTkOFaUAFuz8o1Pj1x2XgCBGaTua2Gmraps4g82vif7jHeXDE/pjW1dxWa2JA2+U3ChnnMIgq/PnTVNMxdQHaL/j26hvI2V0K/zt44Sgvnfwf5UaY47kt5B0jVJADIdCq1seHjJfVm2uoBhKDcUDtqbdykxiCkG0vRzcOpGEqXp5xqGkPmtzSTgBpZZh9LmjTxKuoEl6kqPALTIi4kK/p2CbOkuBOqYdvRUBboXmFT/Tgs72Q7YlT2h3m+olhTwAo2jSJQRKvmoh54l5EFBOiwt1uaka4cdzUoDkd3VZdQE3qJi+nKl1T3UvsiWxv/oxnggHWhThkcwNEmOzdvaq+GhbNPEo2JCTAHMvzDS+9qawJ4KcGcyX28IFqSfVQPRijELidNzbRiCkNO7NNNyfLhsBxSJontUdCofN0p0hIf5peEmp+J/DfiZaEQ473ugxTewintzFq1OsE1JwS6pwQYIZmlGL0Oqj5UuDQqlGGj6fuF/N1dAsa0FYwhWRibFfVF+JeZXT2q6XSk8TMZpNgu+r2NkBzc+YdhUYQYXcWzKz6zmZgsPPeE/DUQ5g1tqvpDqMsCRFarpgSm7HXGoCDesZYUc9bGLin7S21/0XFuso1WXu6sYdsaRiYTNxWt63tW+fGNCzBufESnHc4AA33g4528TgiWy9RHrE+Hjoi1E4FH+6t+8ydFWDWZ+xm26w4fGmfTpjk2oURfu9dtqF+WcQ7RytD9u9Qygkt1c+94bPBPGcjTyP/vP2CM0d4hfIbRafpLj4t1IQG+d5AI5rQjBa0flVbvgmZgoFOAOqiT9hu0PmXfAVG36iz0U/6N0OPLxWXYjNp42r++W02+nL7vwEeKoZKeNzM9YPL53K9DDLu9R46OowEoEYdPp0bDqzfWoDqFuDw59ljAphZuZWuk14xWR5KVU+BTyVN0yc682C7Mn2jt+E7NvADm/iJX/iNP/W/M4hk7X8kRe+00j7J0Ad6sngZfAONMsAmfuEP/na+gfoRfMcGfmATP/ELv/Gn9vdfbq+tKgDgnCEAHDw2+hxgtmx24ayJotgcEiPYLQScwoOYyOMAU5jBEgRYwRo2ILJtgQGBIV9U2J21vyruuO0ZRWZnG5G5S4hw5h05fsKAJHOun/jLvsomwJwIZv7pqiXgYRsAVwXrcrtQOlLxTxUpOh413y55rWBcqLoJUDRMyZvSezI9Xe/J2dTr/SP0nfO+Oz9FubhUdqE4QnEYs55Lk76OU8J1p9AH8/8ObaXPLzyoSP2UH/rxgKE9xNFzYVjzJtQvyumz+KRV4sxdF2nN/GU5HWVvWKiluOfyi00Z9kjFc0VC13f5Q1yuro6glYIjFePrXQR/nDNi1vRi8/7UWfLRD/pjF8CnwPjq5eVULo5/CM4B8zwL4LOgn8E8yzoxVatFMF5Hn0nET1sQnRerYCvFWsL6zETY2mONHUQpyICpaIkKQD5JarZBo7S3x0hhtoQ62Jar9yEOkWYf6s4upCbZBwR12WK0AB7d3tTJBfCyjeixK5THxtUUA+B20BRt9xvak849kr0rF5Z0LKvdcKjKkPbZMiJQ3sBAS0XfIvHZklN6W742r0dP75B7IdYN9y0EMC0TA3fLhXGrU2wFp6cOAqetET0qCijbuFdYvnG+rPKtuB23DtwJox2s6FPRAFABQXYuzYoBU2rkFWTfSqGiwAHpehanbf1UAsCi1SlcHM3GulJ4oWnTK301Cf5CZrU71eXmsSicG6B/dDF223DddhF6qutNc7mxpwqgDqC6K+yijkBhlMophQtONJXTozDH2tN2LmFghuazAO5IBRJd0625xJnu0CtE16EKoA5CdatWFLD3IQx0X9f1wO5B3QghmZ8O6EsC7OnxBh/RTZFouKc56NRKIjeZl5qcVE3gMEAA96MsA/OJC+CVoP9mAQRQ25tvxJSeCozN/omV2wfAD/52rQT44S0oMz9nj7JOH0kADCiAAH9VjuUMj2vYf2zMCYj1SRS32eeEzspmvbH7Gb1NZ63LX5EWC63HertsTGplYq0rrmdMbHU3NJkh39y99UYArXl1h7Gx7lT2ZG51pLoVsftx1rkftCcZ0uM6iegzkdf8q5VIqbH66Sw86tKij+NoZqsb8WjsDtXL5IPWUY3OTy50nAwHr+ZOZQrW3v9rrTvUg09rpkAe2ZHWZl2jrAetbV7HTitr/MGReoiev7soVB7LMg32XDSeMy87av70xz+8Zc4cGBCrAn4vm9pg0N8NcIc5Pou74nPo40arSF03dhCVWW50srjPKYU9XfHkhvTpIXs2yJkmjs1QKeOkoBkra1LmnjE22OgnKe5Ts0WOoAnaQLSI6nttmYeF1mEvtx3BIlvlti5bjIk1dgAZiFS7vPsXXObrVzMNSK5qt1sE2UYKoyYZOlTQtYxsjycT7APtg9h+HcoTJ8s5foUlqBCkNTtknHSyjfKjHl39fKu9rn5RV41UU32dXZf1W0zk2CpAbfXFyHbXwuU1hjYouVM3NZPQr8I3yH+BNhs+RN9qfDfMjuKY3T23eyyPkWiL7gHTTsFO2IephdHF1HWmzZ7iXhHm3lgOjhFFo1tLrXSodfNsK6hdnnM7yakaoTTVGT2KY2ti13wFtHQJqttwuRbKHhvFoSL/LhlX0BIUbxlTHS1PNX3r8Wlp7fiAsteBsuvmuMey2tOKADqJnN5t+CqPCkudqbPHODFORXANNdCyrbWCoJUAsPFdPIjnAdg9LiQPOZDPYJkdomvoZ9DvWLEnIwhEwvRwTPSKNDIbX38MZ6q/IYAAcRt1cBh45q/U/Qs6dB4a0ngBPAXs7RCKqsZHhduh6RnaNVc7bgbW22Eoxp52gvSC2E4YX6S1FSEa+cMhQoCLOmDILIwnJWlHdsReXBtxGNIliBAmXBI8HVpbmwzP7UVIthcr6VGCiXJbnMiRDkWaleRU+NsSJK5JJUMwMRYzoeltmIhgThZE42A2TgzNSMVEkGsRmd9VFcm20iQ9dpA1c7Rg1NLCJE8d/P5dXRq0aDNmioqGjMY0eSJ1PKKoItadsfDpTYlSZz5In3aagRD9lKB8F2ptdJvoUCPFUCVKlGmjabRGYd1nLuw4ZXuRfuwppBOJVmeMu4b+DyxNyFn5ntguegtXBQAAAA==)format("woff2")}p{font-family:"Inter";color:#000;font-size:18px;font-weight:800;line-height:100%;margin:0}</style>`;
const buildRoot = ({ contentString }) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 490 36" preserveAspectRatio="xMidYMid meet">${contentString}</svg>`;
const buildBody = ({ contentString }) => `<div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-flex;align-items:center;background:#fff;padding:5px;border-radius:5px;">${contentString}</div>`;
const buildObject = ({ contentString }) => `<foreignObject x="0" y="0" width="100%" height="100%">${contentString}</foreignObject>`;
const buildRatingValue = ({ contentString }) => `<p style="color:#F27737;font-size:26px;margin:0 5px;">${contentString}</p>`;
const buildRatingLabel = ({ contentString = "rating", }) => `<p>${contentString}</p>`;
const buildLevelValue = ({ contentString }) => `<p style="color:#F27737;font-size:26px;margin:0 5px;">${contentString}</p>`;
const buildLevelLabel = ({ contentString = "level", }) => `<p>${contentString}</p>`;
const build = ({ data }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, loger_1.log)({ message: "Сборка виджета", code: "BUILDER" });
    const { rating, level } = data;
    const style = buildStyle();
    const icon = buildIcon();
    const levelValue = buildLevelValue({ contentString: level });
    const levelLabel = buildLevelLabel({});
    const ratingValue = buildRatingValue({ contentString: rating });
    const ratingLabel = buildRatingLabel({});
    const body = buildBody({
        contentString: style + icon + levelValue + levelLabel + ratingValue + ratingLabel,
    });
    const object = buildObject({ contentString: body });
    yield (0, loger_1.log)({ message: "Виджет собран", code: "BUILDER" });
    return buildRoot({ contentString: object });
});
exports.build = build;
