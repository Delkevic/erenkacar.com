import {
  InterfaceIcon,
  type InterfaceIconName,
} from "@/components/ui/interface-icon";

type AutomationFlowStage = {
  label: string;
  icon: InterfaceIconName;
};

type AutomationFlowProps = {
  stages: readonly AutomationFlowStage[];
  label: string;
  variant?: "compact" | "detailed";
};

export function AutomationFlow({
  stages,
  label,
  variant = "detailed",
}: AutomationFlowProps) {
  return (
    <div className={`automation-flow automation-flow--${variant}`}>
      <ol className="automation-flow__list" aria-label={label}>
        {stages.map((stage, index) => (
          <li className="automation-flow__item" key={stage.label}>
            <span className="automation-flow__node">
              <InterfaceIcon name={stage.icon} />
              <span>{stage.label}</span>
            </span>
            {index < stages.length - 1 ? (
              <span className="automation-flow__arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
