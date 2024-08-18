/**
 * This helper logs in Storybook action which we want to run
 */
import { action } from "@storybook/addon-actions";

export const logAction = action("render") as (...args: unknown[]) => void;
