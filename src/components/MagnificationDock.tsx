/**
 * MagnificationDock — monopo dark style edition
 * Adapted from the macOS-inspired dock spec.
 * Replaces shadcn/ui tokens with hard-coded dark palette.
 */

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type DockItemData = {
  icon:      React.ReactNode;
  label:     React.ReactNode;
  onClick:   () => void;
  className?: string;
};

export type DockProps = {
  items:          DockItemData[];
  className?:     string;
  distance?:      number;
  panelHeight?:   number;
  baseItemSize?:  number;
  dockHeight?:    number;
  magnification?: number;
  spring?:        SpringOptions;
};

type DockItemProps = {
  className?:     string;
  children:       React.ReactNode;
  onClick?:       () => void;
  mouseX:         MotionValue<number>;
  spring:         SpringOptions;
  distance:       number;
  baseItemSize:   number;
  magnification:  number;
};

/* ─── DockItem ───────────────────────────────────────────────── */
function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref            = useRef<HTMLDivElement>(null);
  const isHovered      = useMotionValue(0);
  const frozenCenter   = useRef<number | null>(null);

  // Freeze the item's center X on first mouse-enter, reset on leave.
  // This prevents the feedback loop where the growing item shifts its own
  // bounding rect, causing distance to re-compute and oscillate.
  useEffect(() => {
    return mouseX.on('change', val => {
      if (val === Infinity) {
        frozenCenter.current = null;
      } else if (frozenCenter.current === null && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        frozenCenter.current = rect.left + rect.width / 2;
      }
    });
  }, [mouseX]);

  const mouseDistance = useTransform(mouseX, val => {
    if (val === Infinity) return Infinity;
    if (frozenCenter.current !== null) return val - frozenCenter.current;
    const rect = ref.current?.getBoundingClientRect();
    return rect ? val - (rect.left + rect.width / 2) : Infinity;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={()  => isHovered.set(0)}
      onFocus={()     => isHovered.set(1)}
      onBlur={()      => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full
        bg-white/[0.06]
        hover:bg-white/[0.10]
        cursor-pointer transition-colors duration-150 ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, child =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number> }>, {
              isHovered,
            })
          : child,
      )}
    </motion.div>
  );
}

/* ─── DockLabel (tooltip) ────────────────────────────────────── */
type DockLabelProps = {
  className?:  string;
  children:    React.ReactNode;
  isHovered?:  MotionValue<number>;
};

function DockLabel({ children, className = '', isHovered }: DockLabelProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    return isHovered.on('change', v => setVisible(v === 1));
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: -6 }}
          exit={  { opacity: 0, y: 4 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={`absolute -top-9 left-1/2 w-fit whitespace-nowrap
            rounded-full border border-white/10
            bg-black/85 backdrop-blur-sm
            px-2.5 py-1 text-[11px] font-light text-white/70
            shadow-lg pointer-events-none ${className}`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── DockIcon ───────────────────────────────────────────────── */
type DockIconProps = {
  className?:  string;
  children:    React.ReactNode;
  isHovered?:  MotionValue<number>;
};

function DockIcon({ children, className = '' }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center text-white/60
      group-hover:text-white/90 transition-colors ${className}`}>
      {children}
    </div>
  );
}

/* ─── MagnificationDock (public) ─────────────────────────────── */
export function MagnificationDock({
  items,
  className     = '',
  spring        = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance      = 200,
  panelHeight   = 64,
  dockHeight    = 256,
  baseItemSize  = 50,
}: DockProps) {
  const mouseX   = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight],
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height    = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: 'none' }}
      className="flex max-w-full items-center justify-center"
    >
      <motion.div
        onMouseMove={({ clientX }) => {
          isHovered.set(1);
          mouseX.set(clientX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`flex items-end w-fit gap-2.5 rounded-2xl
          pb-2 px-3.5
          ${className}`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Navigation dock"
      >
        {items.map((item, i) => (
          <DockItem
            key={i}
            onClick={item.onClick}
            className={item.className ?? ''}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default MagnificationDock;
