import React from 'react';
import TitleNotes from './TitleNotes';
import FlowUnits from './FlowUnits';
import Infiltration from './Infiltration';
import FlowRouting from './FlowRouting';
import LinkOffsets from './LinkOffsets';
import MinSlope from './MinSlope';
import AllowPonding from './AllowPonding';
import SkipSteadyState from './SkipSteadyState';
import StartDate from './StartDate';
import StartTime from './StartTime';
import ReportStartDate from './ReportStartDate';
import ReportStartTime from './ReportStartTime';
import EndDate from './EndDate';
import EndTime from './EndTime';
import SweepStart from './SweepStart';
import SweepEnd from './SweepEnd';
import DryDays from './DryDays';
import ReportStep from './ReportStep';
import WetStep from './WetStep';
import DryStep from './DryStep';
import RoutingStep from './RoutingStep';
import InertialDamping from './InertialDamping';
import NormalFlowLimited from './NormalFlowLimited';
import ForceMainEquation from './ForceMainEquation';
import VariableStep from './VariableStep';
import LengtheningStep from './LengtheningStep';
import MinSurfArea from './MinSurfarea';
import MaxTrials from './MaxTrials';
import HeadTolerance from './HeadTolerance';
import SysFlowTolerance from './SysFlowTolerance';
import LatFlowTolerance from './LatFlowTolerance';

function OptionsMenu({model = {}, onUpdate = f => f}) {
  return (
  <>
    <TitleNotes style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <FlowUnits style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <Infiltration style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <FlowRouting style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <LinkOffsets style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <MinSlope style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <AllowPonding style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <SkipSteadyState style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <StartDate style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <StartTime style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <ReportStartDate style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <ReportStartTime style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <EndDate style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <EndTime style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <SweepStart style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <SweepEnd style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <DryDays style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <ReportStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <WetStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <DryStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <RoutingStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <InertialDamping style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <NormalFlowLimited style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <ForceMainEquation style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <VariableStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <LengtheningStep style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <MinSurfArea style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <MaxTrials style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <HeadTolerance style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <SysFlowTolerance style={{display: 'block'}} data={model} onUpdate={onUpdate} />
    <LatFlowTolerance style={{display: 'block'}} data={model} onUpdate={onUpdate} />
  </>
  );
}

export default OptionsMenu;