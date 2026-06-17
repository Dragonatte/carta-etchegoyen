import React, { ComponentType, CSSProperties } from "react";

import {
	EggIcon,
	GlutenIcon,
	MilkIcon,
	MustardIcon,
	SesameIcon,
	SoyaIcon,
	SulphiteIcon
} from "react-allergens";

import type { IconType } from "react-icons";

import {
	FaCheese,
	FaHamburger,
	FaHotdog,
	FaLeaf,
	FaPepperHot
} from "react-icons/fa";

import {
	GiGarlic,
	GiSausage,
	GiTomato
} from "react-icons/gi";

type AllergenIconProps = {
	width?: number | string;
	height?: number | string;
	innerColor?: string;
	outerColor?: string;
	wrapperStyle?: CSSProperties;
};

const ALERGENO_META: Record<string, {
	label: string;
	Icon: ComponentType<AllergenIconProps>;
}> = {
	gluten: {
		label: "Gluten",
		Icon: GlutenIcon
	},
	leche: {
		label: "Leche",
		Icon: MilkIcon
	},
	huevo: {
		label: "Huevo",
		Icon: EggIcon
	},
	mostaza: {
		label: "Mostaza",
		Icon: MustardIcon
	},
	soja: {
		label: "Soja",
		Icon: SoyaIcon
	},
	sésamo: {
		label: "Sésamo",
		Icon: SesameIcon
	},
	sulfitos: {
		label: "Sulfitos",
		Icon: SulphiteIcon
	}
};

function AlergenoIcon({ alergeno }: { alergeno: string }) {
	const meta = ALERGENO_META[alergeno];

	if (!meta) return null;

	const Icon = meta.Icon;

	return (
		<button
			type="button"
			aria-label={`Alérgeno: ${meta.label}`}
			title={meta.label}
			className="
				group relative inline-flex h-9 w-9 items-center justify-center
				rounded-full border border-accent/30 bg-black/30
				transition hover:border-accent hover:bg-accent/10
				focus:outline-none focus:ring-2 focus:ring-accent/70
			"
		>
			<Icon
					width={24}
					height={24}
					outerColor={"#FAB91B80"}
			/>

			<span
				className="
					pointer-events-none absolute bottom-full left-1/2 z-30 mb-2
					-translate-x-1/2 whitespace-nowrap rounded-md
					bg-zinc-900 px-2 py-1 text-xs font-semibold text-white
					opacity-0 shadow-lg transition-opacity
					group-hover:opacity-100 group-focus:opacity-100
				"
			>
				{meta.label}

				<span
					className="
						absolute left-1/2 top-full -translate-x-1/2
						border-4 border-transparent border-t-zinc-900
					"
				/>
			</span>
		</button>
	);
}

export function Alergenos({ alergenos }: { alergenos?: string[] }) {
	if (!alergenos?.length) return null;

	return (
		<div className="mt-3 flex flex-wrap gap-2">
			{alergenos.map((alergeno) => (
				<AlergenoIcon key={alergeno} alergeno={alergeno} />
			))}
		</div>
	);
}

export function Picante({ nivel }: { nivel?: 1 | 2 | 3 }) {
	if (!nivel) return null;

	return (
		<span
			className="ml-2 inline-flex items-center gap-0.5 align-middle text-red-500 animate-vibrate-rotate-1"
			aria-label={`Picante nivel ${nivel}`}
			title={`Picante nivel ${nivel}`}
		>
			{Array.from({ length: nivel }).map((_, index) => (
				<FaPepperHot key={index} aria-hidden="true"/>
			))}
		</span>
	);
}

type FloatingFoodIcon = {
	Icon: IconType;
	className: string;
	rotate: string;
	delay: string;
	strokeWidth?: number;
};

const FLOATING_FOOD_ICONS: FloatingFoodIcon[] = [
	{
		Icon: FaPepperHot,
		className: "hidden md:block left-4 top-[14dvh] lg:left-10 text-7xl text-red-500/20 md:text-red-500/25",
		rotate: "-14deg",
		delay: "0s"
	},
	{
		Icon: GiGarlic,
		className: "hidden md:block right-4 top-[18dvh] lg:right-10 text-7xl text-white/20 md:text-white/25",
		rotate: "18deg",
		delay: "-1.4s"
	},
	{
		Icon: GiTomato,
		className: "hidden md:block left-6 top-[42dvh] lg:left-16 text-8xl text-red-500/20 md:text-red-500/25",
		rotate: "10deg",
		delay: "-2.1s"
	},
	{
		Icon: FaCheese,
		className: "hidden md:block right-6 top-[43dvh] lg:right-16 text-8xl text-accent/20 md:text-accent/25",
		rotate: "-12deg",
		delay: "-3s"
	},
	{
		Icon: FaHamburger,
		className: "hidden md:block left-4 bottom-[16dvh] lg:left-12 text-8xl text-amber-900/25 md:text-amber-900/30",
		rotate: "8deg",
		delay: "-4.2s"
	},
	{
		Icon: FaLeaf,
		className: "hidden md:block right-10 bottom-[18dvh] lg:right-20 text-7xl text-lime-400/20 md:text-lime-400/25",
		rotate: "22deg",
		delay: "-2.7s"
	},
	{
		Icon: GiSausage,
		className: "hidden lg:block left-[10vw] bottom-[4dvh] text-8xl text-rose-400/20 md:text-rose-400/25",
		rotate: "-20deg",
		delay: "-5s"
	},
	{
		Icon: FaHotdog,
		className: "hidden lg:block right-[10vw] bottom-[5dvh] text-8xl text-orange-900/25 md:text-orange-900/30",
		rotate: "15deg",
		delay: "-3.8s"
	},

	{
		Icon: FaHamburger,
		className: "md:hidden left-[-1rem] top-[16dvh] text-8xl text-amber-900/10",
		rotate: "-12deg",
		delay: "0s"
	},
	{
		Icon: GiTomato,
		className: "md:hidden right-[-1.5rem] top-[34dvh] text-8xl text-red-500/10",
		rotate: "18deg",
		delay: "-1.8s"
	},
	{
		Icon: FaCheese,
		className: "md:hidden left-[-1rem] top-[54dvh] text-8xl text-accent/10",
		rotate: "10deg",
		delay: "-3.2s"
	},
	{
		Icon: GiGarlic,
		className: "md:hidden right-[-1rem] top-[72dvh] text-7xl text-white/10",
		rotate: "-18deg",
		delay: "-2.4s"
	},
	{
		Icon: FaHotdog,
		className: "md:hidden left-[20vw] bottom-[2dvh] text-8xl text-orange-900/10",
		rotate: "16deg",
		delay: "-4.5s"
	}
];

export function FloatingFoodIcons() {
	return (
		<div
			aria-hidden="true"
			className="pointer-events-none fixed inset-0 z-0 h-dvh w-dvw overflow-hidden"
		>
			{FLOATING_FOOD_ICONS.map(({ Icon, className, rotate, delay, strokeWidth }, index) => (
				<Icon
					key={index}
					fill="none"
					stroke="currentColor"
					strokeWidth={strokeWidth ?? 18}
					className={`
						food-outline-icon absolute
						${className}
					`}
					style={{
						"--food-rotate": rotate,
						animationDelay: delay
					} as React.CSSProperties}
				/>
			))}
		</div>
	);
}