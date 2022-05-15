import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import AppointmentTime from '../components/Appointment/AppointmentTime/AppointmentTime';
import DistrictStep from '../components/Appointment/DistrictStep/DistrictStep';
import OrganizationStep from '../components/Appointment/OrganizationStep/OrganizationStep';
import SpecializationStep from '../components/Appointment/SpecializationStep/SpecializationStep';
import Stages from '../components/Appointment/Stages/Stages';
import MainLayout from '../components/MainLayout';

const Appointment = () => {
    const [step, setStep] = useState<number>()
    const [district, setDistrict] = useState('')
    const [clinic, setClinic] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [appointmentTime, setAppointmentTime] = useState('')
    const {query: {district: d}} = useRouter()
    console.log(useRouter())

    useMemo(() => {
        if (d) setDistrict(String(d))
    }, [d])

    useEffect(() => {
        if (!district) {
            setStep(1)
        } else if (!clinic) {
            setStep(2)
        } else if (!specialization) {
            setStep(3)
        } else if (!appointmentTime) {
            setStep(4)
        } else {
            setStep(1)
        }
    }, [district, clinic, specialization, appointmentTime])

    return (
        <MainLayout background={'#FBFBFD'}>
            <Stages
                step={step}
                setStep={setStep}
                district={district}
                clinic={clinic}
                specialization={specialization}
                appointmentTime={appointmentTime}
            />
            <DistrictStep setDistrict={setDistrict} setStep={setStep} setClinic={setClinic} setSpecialization={setSpecialization} step={step}/>
            <OrganizationStep setClinic={setClinic} setStep={setStep} step={step}/>
            <SpecializationStep setSpecialization={setSpecialization} setStep={setStep} step={step}/>
            <AppointmentTime setAppointmentTime={setAppointmentTime} setStep={setStep} step={step}/>
        </MainLayout>
    );
};

export default Appointment;