import React from 'react';
import {HeartPulse,Car,Users,ShieldCheck,Building2,Plane,House,Ship,Footprints,ClipboardList,FileText,CheckCircle2,BarChart3,UserRound,BriefcaseBusiness,ArrowRight} from 'lucide-react';

const insurance=[
  ['Health',HeartPulse],['Motor',Car],['Life',Users],['Term',ShieldCheck],
  ['Corporate',Building2],['Travel',Plane],['Property',House],['Marine',Ship]
];

export default function VipulDashboardV2({role='customer',openPage=()=>{},openModal=()=>{}}){
  const isCustomer=role==='customer';
  const heading=isCustomer?'Explore Insurance':role==='employee'?'Agent Workspace':'Management Center';
  const description=isCustomer?'Choose a cover to request a quotation':role==='employee'?'Manage your daily insurance operations':'Review your business at a glance';
  const actions=isCustomer?[
    ['Get Quote',ClipboardList,()=>openModal('quote')],
    ['My Policies',FileText,()=>openPage('policies')],
    ['Track Claims',ShieldCheck,()=>openPage('claims')],
    ['Wellness',Footprints,()=>openPage('wellness')]
  ]:role==='employee'?[
    ['New Lead',Users,()=>openModal('lead')],
    ['Quotes',ClipboardList,()=>openPage('quotes')],
    ['My Tasks',CheckCircle2,()=>openPage('tasks')],
    ['Claims',ShieldCheck,()=>openPage('claims')]
  ]:[
    ['Analytics',BarChart3,()=>openPage('reports')],
    ['Policies',FileText,()=>openPage('policies')],
    ['Leads',Users,()=>openPage('leads')],
    ['Team Tasks',BriefcaseBusiness,()=>openPage('tasks')]
  ];
  return <div className="v2-dashboard">
    <section className="v2-services" aria-label={heading}>
      <div className="v2-heading"><div><h3>{heading}</h3><small>{description}</small></div><ArrowRight size={20} color="#1264b5"/></div>
      <div className="v2-grid">
        {insurance.map(([label,Icon])=><button type="button" className="v2-service" key={label} onClick={()=>openModal('quote')} aria-label={'Request '+label+' insurance quote'}><Icon aria-hidden="true"/><span>{label}</span></button>)}
      </div>
      <p className="v2-role-note">Demo interface — quote requests are saved only on this device.</p>
    </section>
    <section className="v2-services" aria-label="Quick actions">
      <div className="v2-heading"><h3>Quick Actions</h3></div>
      <div className="v2-grid">
        {actions.map(([label,Icon,fn])=><button type="button" className="v2-service" key={label} onClick={fn}><Icon aria-hidden="true"/><span>{label}</span></button>)}
      </div>
    </section>
    {isCustomer&&<section className="v2-wellness">
      <div><h3>Wellness & Activity</h3><p>Record your steps and daily stress check-in.</p></div>
      <button type="button" onClick={()=>openPage('wellness')}>Open Wellness</button>
    </section>}
  </div>;
}
