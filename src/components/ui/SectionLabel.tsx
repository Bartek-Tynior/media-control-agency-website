import { FC } from 'react'

interface SectionLabelProps {
  sectionName: string
}

const SectionLabel: FC<SectionLabelProps> = ({ sectionName }) => {
    return (
      <h2 className="text-2xl py-2 px-4 blured-bg w-fit border border-white/10 rounded-lg">
            { sectionName }
      </h2>
    );
}

export default SectionLabel