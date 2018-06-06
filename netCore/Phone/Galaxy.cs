    namespace Phone{
    public class Galaxy : Phone, IRingable {
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
        : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return _ringTone;
        }

        public string Unlock() 
        {
            return "Galaxy "+_versionNumber+" unlocked with fingerprint.";
        }
        public override void DisplayInfo() 
        {
            System.Console.WriteLine("#########\nGalaxy "+_versionNumber+
            "\nBattery Percentage: "+_batteryPercentage+
            "\nCarrier: "+_carrier+
            "\nRing Tone: "+_ringTone+
            "\n#########");          
        }
    }
           
}