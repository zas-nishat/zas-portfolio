import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { useState, useEffect } from "react";

interface CircularProgressProps {
  progress: number;
  name: string;
  isVisible: boolean;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ progress, name, isVisible }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const animation = requestAnimationFrame(() => setAnimatedProgress(progress));
        return () => cancelAnimationFrame(animation);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedProgress(0);
    }
  }, [progress, isVisible]);

  const data = [{ name, value: animatedProgress }];

  return (
    <div className="flex flex-col items-center">
      <RadialBarChart
        width={150}
        height={150}
        innerRadius="80%"
        outerRadius="100%"
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
        <RadialBar
          background
          dataKey="value"
          angleAxisId={0}
          fill="hsl(var(--primary))"
          cornerRadius={10}
          className="transition-all duration-1000"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground text-2xl font-bold"
        >
          {`${Math.round(animatedProgress)}%`}
        </text>
      </RadialBarChart>
      <p className="text-muted-foreground mt-2">{name}</p>
    </div>
  );
};

export default CircularProgress;