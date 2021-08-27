import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { DayLinkPassedState } from '../../../../types/Day';

// styles
import buttonStyle from './NavButton.module.scss';

interface NavButtonProps {
  iconReplacement?: string
  Icon?: string
  title: string
  isChallengeLink?: boolean
  number?: number
  link?: LinkPathObject
}

interface LinkPathObject {
  pathname: string
  state: LinkState
}

interface LinkState {
  source: string
}

const ease = (v: number, pow = 4) => 1 - Math.pow(1 - v, pow);

/* The function below is an overly complicated way to create a smooth and fast css animation, why did I even bother (but hey, this can be used to create very nice (x, y) animations if you figure out the math)*/
const createExpandKeyframeAnimation = () => new Promise<HTMLStyleElement>((resolve, reject) => {
  let expand_animation = '', retract_animation = '';
  for (let step = 0; step <= 100; step++) {
    expand_animation += `
      ${step}% {
        transform: scaleY(${ease(step / 100)});
      }
    `;

    retract_animation += `
      ${step}% {
        transform: scaleY(${ease(1 - step / 100)})
      }
    `
  }
  const keyframe = `
    @keyframes expand {
      ${expand_animation}
    }

    @keyframes retract {
      ${retract_animation}
    }
  `;

  const ani = document.querySelector('.ani');
  if (!ani) {
    const aniElement = document.createElement('style');
    aniElement.classList.add('ani');
    aniElement.textContent = keyframe;
    document.head.appendChild(aniElement);
    resolve(aniElement);
  } else {
    resolve(ani as HTMLStyleElement);
  }
})

const NavButton: React.FC<NavButtonProps> = (props) => {
  const match = useRouteMatch();
  const [Expand, setExpand] = useState<{ expand: boolean, wasExpanded: boolean }>({expand: false, wasExpanded: false});
  const [ShowRetractAnimation, setShowRetractAnimation] = useState<boolean>(false);
  const { title, Icon, iconReplacement, isChallengeLink, number, link } = props;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (Expand) {
      setShowRetractAnimation(true);
      setTimeout(() => {
        setShowRetractAnimation(false);
        setExpand(state => ({
          expand: !state.expand,
          wasExpanded: state.expand
        }))
      }, 100)
    } else {
      setExpand(state => ({
        expand: !state.expand,
        wasExpanded: state.expand
      }));
    }
  }

  createExpandKeyframeAnimation();

  const ButtonContent: JSX.Element = (
    <>
      <div className={buttonStyle.left_content}>
        <div className={`${buttonStyle.icon_container} ${!!Icon && buttonStyle.with_icon_container}`}>
          { Icon ? <Icon /> : iconReplacement }
        </div>
        <span className={buttonStyle.title}>{ title }</span>
      </div>
      {
        isChallengeLink && (
          <span
            className={`${buttonStyle.indicator} ${Expand.expand && buttonStyle.indicator_active} ${Expand.wasExpanded && buttonStyle.indicator_active_remove}`}
          >
            &gt;
          </span>
        )
      }
    </>
  )

  return (
    <>
      {
        link?.pathname ? <Link<LinkState> className={buttonStyle.button} to={link}>{ButtonContent}</Link> : <button className={buttonStyle.button} onClick={handleButtonClick}>{ButtonContent}</button>
      }
      {
        (Expand.expand && isChallengeLink) && (
          <ul className={`${buttonStyle.nav_list} ${Expand.expand && buttonStyle.list_expand} ${ShowRetractAnimation && buttonStyle.list_retract}`}>
            <li>
              <Link<DayLinkPassedState> to={{
                  pathname: `${match.path}/day${number}/main`,
                  state: {
                    number: number!,
                    day: 'main'
                  }
                }}
                >Main</Link>
            </li>
            <li>
              <Link<DayLinkPassedState> to={{
                pathname: `${match.path}/day${number}/side`,
                state: {
                  number: number!,
                  day: 'side'
                }
                }}
              >Side</Link>
            </li>
          </ul>
        )
      }
    </>
  )
}

export default NavButton;
