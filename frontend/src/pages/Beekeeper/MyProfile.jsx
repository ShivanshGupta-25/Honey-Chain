import { useEffect, useState } from "react";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Loader2,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";

import ProfileHeader from "../../components/beekeeper/profile/ProfileHeader";
import ProfileSection from "../../components/beekeeper/profile/ProfileSection";
import ProfileInfoItem from "../../components/beekeeper/profile/ProfileInfoItem";
import EditProfileModal from "../../components/beekeeper/profile/EditProfileModal";
import ChangePasswordModal from "../../components/beekeeper/account/ChangePasswordModal";

import {
  getCurrentUser,
  updateProfile,
  changePassword,
} from "../../api/authApi";

import { updateStoredUser } from "../../utils/auth";


const MyProfile = () => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [updateLoading, setUpdateLoading] =
    useState(false);

  const [updateError, setUpdateError] =
    useState("");

  const [isPasswordOpen, setIsPasswordOpen] =
  useState(false);

  const [passwordLoading, setPasswordLoading] =
    useState(false);

  const [passwordError, setPasswordError] =
    useState("");

  const [passwordSuccess, setPasswordSuccess] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");


  // ========================================
  // Fetch Profile
  // ========================================

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getCurrentUser();

      if (!data?.user) {
        throw new Error(
          "Unable to load profile"
        );
      }

      setProfile(data.user);

      // Keep localStorage synchronized
      updateStoredUser(data.user);

    } catch (error) {
      console.error(
        "Failed to load profile:",
        error
      );

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to load profile";

      setError(message);

    } finally {
      setLoading(false);
    }
  };


  // ========================================
  // Initial Load
  // ========================================

  useEffect(() => {
    fetchProfile();
  }, []);


  // ========================================
  // Update Profile
  // ========================================

  const handleUpdateProfile = async (
    formData
  ) => {
    try {
      setUpdateLoading(true);
      setUpdateError("");
      setSuccessMessage("");

      const data =
        await updateProfile(formData);

      if (!data?.user) {
        throw new Error(
          "Profile update failed"
        );
      }

      // Update UI
      setProfile(data.user);

      // Update cached user
      updateStoredUser(data.user);

      // Close modal
      setIsEditOpen(false);

      // Show success message
      setSuccessMessage(
        "Profile updated successfully."
      );

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

    } catch (error) {
      console.error(
        "Failed to update profile:",
        error
      );

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update profile";

      setUpdateError(message);

    } finally {
      setUpdateLoading(false);
    }
  };

  // ========================================
  // Change Password
  // ======================================== 
  const handleChangePassword = async (
  passwordData
    ) => {
      try {
        setPasswordLoading(true);
        setPasswordError("");
        setPasswordSuccess("");

        const data =
          await changePassword(passwordData);

        setPasswordSuccess(
          data?.message ||
            "Password changed successfully."
        );

        setTimeout(() => {
          setIsPasswordOpen(false);
          setPasswordSuccess("");
        }, 1500);

      } catch (error) {
        console.error(
          "Failed to change password:",
          error
        );

        const message =
          error?.response?.data?.message ||
          "Failed to change password.";

        setPasswordError(message);

      } finally {
        setPasswordLoading(false);
      }
    };


  // ========================================
  // Loading State
  // ========================================

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">

          <div className="flex min-h-[500px] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <Loader2
                size={28}
                className="animate-spin text-amber-600"
              />

              <p className="text-sm text-slate-500">
                Loading your profile...
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }


  // ========================================
  // Error State
  // ========================================

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">

          <Link
            to="/beekeeper/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>

          <div className="mt-8 rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <h2 className="text-lg font-bold text-slate-800">
              Unable to load profile
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {error || "Profile data is unavailable."}
            </p>

            <button
              type="button"
              onClick={fetchProfile}
              className="mt-5 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Try Again
            </button>
          </div>

        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <div className="mb-6">
          <Link
            to="/beekeeper/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-800"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </Link>
        </div>


        {/* Page Heading */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-800">
            My Profile
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your personal information and
            beekeeper account.
          </p>
        </div>


        {/* Success Message */}
        {successMessage && (
          <div className="mb-5 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
            {successMessage}
          </div>
        )}


        {/* Profile Header */}
        <ProfileHeader
          profile={profile}
          onEdit={() => {
            setUpdateError("");
            setIsEditOpen(true);
          }}
        />


        {/* Main Content */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Main Column */}
          <div className="space-y-6 lg:col-span-2">

            {/* Personal Information */}
            <ProfileSection
              title="Personal Information"
              description="Your basic account and contact information."
            >
              <div className="grid gap-4 sm:grid-cols-2">

                <ProfileInfoItem
                  icon={UserRound}
                  label="Full Name"
                  value={profile.name}
                />

                <ProfileInfoItem
                  icon={BriefcaseBusiness}
                  label="Role"
                  value={
                    profile.role
                      ? profile.role
                          .charAt(0)
                          .toUpperCase() +
                        profile.role.slice(1)
                      : "Beekeeper"
                  }
                  iconClassName="text-amber-600"
                />

                <ProfileInfoItem
                  icon={Mail}
                  label="Email Address"
                  value={profile.email}
                  iconClassName="text-blue-500"
                />

                <ProfileInfoItem
                  icon={Phone}
                  label="Phone Number"
                  value={profile.phone}
                  iconClassName="text-emerald-500"
                />

                <ProfileInfoItem
                  icon={MapPin}
                  label="Location"
                  value={profile.location}
                  iconClassName="text-orange-500"
                />

              </div>
            </ProfileSection>


            {/* Beekeeper Information */}
            <ProfileSection
              title="Beekeeping Information"
              description="Operational information will be connected to your beekeeper data."
            >
              <div className="grid gap-4 sm:grid-cols-2">

                <ProfileInfoItem
                  icon={BriefcaseBusiness}
                  label="Beekeeper ID"
                  value="Will be connected"
                  iconClassName="text-amber-600"
                />

                <ProfileInfoItem
                  icon={MapPin}
                  label="Apiary Location"
                  value="Will be connected"
                  iconClassName="text-orange-500"
                />

                <ProfileInfoItem
                  icon={BriefcaseBusiness}
                  label="Active Hives"
                  value="Will be connected"
                  iconClassName="text-blue-500"
                />

                <ProfileInfoItem
                  icon={UserRound}
                  label="Experience"
                  value="Will be connected"
                  iconClassName="text-violet-500"
                />

              </div>
            </ProfileSection>

          </div>


          {/* Sidebar */}
          <div className="space-y-6">

            {/* Account */}
            <ProfileSection
              title="Account & Security"
              description="Manage your account status and security."
            >
              <div className="space-y-3">

                {/* Account Status */}
                <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-700">
                      Account Status
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Current account availability
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      profile.isActive
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {profile.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </div>


                {/* Member Since */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Member Since
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {profile.createdAt
                      ? new Date(
                          profile.createdAt
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : "Not available"}
                  </p>
                </div>


                {/* Password */}
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        Password
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        Update your account password.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setPasswordError("");
                        setPasswordSuccess("");
                        setIsPasswordOpen(true);
                      }}
                      className="shrink-0 text-xs font-semibold text-amber-600 transition hover:text-amber-700"
                    >
                      Change
                    </button>
                  </div>
                </div>

              </div>
            </ProfileSection>

            {/* Honey Chain */}
            <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-amber-600 shadow-sm">
                <BriefcaseBusiness size={18} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-slate-800">
                Honey Chain Beekeeper
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Your profile connects your identity
                with hive monitoring, honey batches
                and traceability records.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Account connected
              </div>

            </div>

          </div>
        </div>
      </div>


      {/* Edit Profile Modal */}
      <EditProfileModal
        profile={profile}
        isOpen={isEditOpen}
        onClose={() => {
          if (!updateLoading) {
            setIsEditOpen(false);
            setUpdateError("");
          }
        }}
        onSave={handleUpdateProfile}
        loading={updateLoading}
        error={updateError}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        isOpen={isPasswordOpen}
        onClose={() => {
          if (!passwordLoading) {
            setIsPasswordOpen(false);
            setPasswordError("");
            setPasswordSuccess("");
          }
        }}
        onSave={handleChangePassword}
        loading={passwordLoading}
        error={passwordError}
        success={passwordSuccess}
      />

    </div>
  );
};

export default MyProfile;
