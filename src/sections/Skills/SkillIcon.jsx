"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  FaRegQuestionCircle,
} from "react-icons/fa";
import {
  SiCss3,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import CursorImage from "../../assets/images/skill-section/cursor/cursor-dark.webp";
import VsCodeImage from "../../assets/images/skill-section/vscode/vscode.webp";
import CssImage from "../../assets/images/skill-section/css/css.webp";

const imageIconFactory =
  (src, alt) =>
  ({ size = 32 }) => (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size }}
    />
  );

const CursorIcon = imageIconFactory(CursorImage, "Cursor AI");
const VsCodeIcon = imageIconFactory(VsCodeImage, "VS Code");
const CssAssetIcon = imageIconFactory(CssImage, "CSS");

export const iconMap = {
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
  SiCss3,
  SiFramer,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  CursorIcon,
  VsCodeIcon,
  CssAssetIcon,
};

const IMAGE_ICON_KEYS = new Set(["CursorIcon", "VsCodeIcon", "CssAssetIcon"]);
const DEFAULT_ICON = FaRegQuestionCircle;

const SkillIcon = ({
  icon,
  color = "#6C757D",
  size = 28,
  title,
  className,
}) => {
  const IconComponent = iconMap[icon] ?? DEFAULT_ICON;
  const isImageIcon = IMAGE_ICON_KEYS.has(icon);

  const iconElement = useMemo(() => {
    if (isImageIcon) {
      return <IconComponent size={size} />;
    }

    return <IconComponent size={size} color={color} style={{ color }} />;
  }, [IconComponent, color, isImageIcon, size]);

  const mergedClassName = ["skill-icon", className].filter(Boolean).join(" ");

  return (
    <span className={mergedClassName} title={title} aria-hidden={!title}>
      {iconElement}
    </span>
  );
};

export default memo(SkillIcon);
